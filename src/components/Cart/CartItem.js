import React, { useContext } from 'react';
import AuthContent from '../Store/Auth';
import CartContext from '../Store/CartContent';
import Modal from '../UI/Modal';
import styles from './CartItem.module.css';
import CartItemOrder from './CartItemOrder';

const CartItem = () => {
  const ctx = useContext(AuthContent);
  const cartCtx = useContext(CartContext);
  const removeFromCart = id => {
    cartCtx.removeItem(id);
  };
  const addToCart = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItem = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItemOrder
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addToCart.bind(null, item)}
          onRemove={removeFromCart.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItem = cartCtx.items.length > 0;

  const OrderHandler = () => {
    alert('Done !');
    window.location.reload(true);
  };

  return (
    <Modal>
      {cartItem}

      <div className={styles.total}>
        <span>total Amount</span>
        <span>{`$ ${totalAmount}`}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={ctx.hideCart}>
          Close
        </button>
        {hasItem && (
          <button className={styles.button} onClick={OrderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default CartItem;
