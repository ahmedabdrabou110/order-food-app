import React , {useContext }from 'react'
import CartIcon from '../Cart/CartIcon';
import AuthContent from '../Store/Auth';
import CartContext from '../Store/CartContent';
import styles from "./CardButton.module.css";

const CardButton = props => {
    const ctx = useContext(AuthContent);
    const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
    return (
        <button className={styles.button} onClick={ctx.showCart}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            Your Cart
            <span className={styles.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default CardButton ;