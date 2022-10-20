import React , {useContext }from 'react'
import CartIcon from '../Cart/CartIcon';
import AuthContent from '../Store/Auth';
import CartContext from '../Store/CartContent';
import styles from "./CardButton.module.css";

const CardButton = props => {
    const ctx = useContext(AuthContent);
    const cartCtx = useContext(CartContext);

    const numberOfCart = cartCtx.items.reduce((current , item) =>{
      return current + item.amount ;
    } , 0)
    return (
        <button className={styles.button} onClick={ctx.showCart}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            Your Cart
            <span className={styles.badge}>
                {numberOfCart}
            </span>
        </button>
    )
}

export default CardButton ;