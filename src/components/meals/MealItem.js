import React, { useContext } from 'react';
import CartContext from '../Store/CartContent';

import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = props => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addCart = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal} key={props.id}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddCart={addCart} />
      </div>
    </li>
  );
};

export default MealItem;
