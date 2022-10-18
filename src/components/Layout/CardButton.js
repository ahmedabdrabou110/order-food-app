import React from 'react'
import CartIcon from '../Cart/CartIcon';
import styles from "./CardButton.module.css";

const CardButton = props => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            Your Cart
            <span className={styles.badge}>
                3
            </span>
        </button>
    )
}

export default CardButton ;