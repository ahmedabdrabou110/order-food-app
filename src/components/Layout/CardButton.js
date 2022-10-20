import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import AuthContent from '../Store/Auth';
import CartContext from '../Store/CartContent';
import styles from './CardButton.module.css';
import { useEffect, useState } from 'react';
const CardButton = props => {
  const ctx = useContext(AuthContent);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [buttonIsLighted, setButtonIsLighted] = useState(false);

  const classes = `${styles.button} ${buttonIsLighted && styles.bump}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    let timer = setTimeout(() => {
      setButtonIsLighted(false);
    }, 500);

    setButtonIsLighted(true);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={classes} onClick={ctx.showCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      Your Cart
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CardButton;
