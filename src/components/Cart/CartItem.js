import React , {useContext}from 'react'
import AuthContent from '../Store/Auth';
import Modal from '../UI/Modal';
import styles from "./CartItem.module.css";


const CartItem = () => {
  const ctx = useContext(AuthContent);
  const cartItem = (
    <ul className={styles["cart-items"]}>
      {[{id:"c1" , name:"Sushi" , amount : 3 , price:12.99}].map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return  (
    <Modal>
    {cartItem}

    <div className={styles.total}>
      <span>total Amount</span>
      <span>35.65</span>
    </div>
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={ctx.hideCart}>Close</button>
      <button className={styles.button}>Order</button>
    </div>
    </Modal>
  )
}

export default CartItem ; 