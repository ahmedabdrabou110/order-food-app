import React from 'react'
import Input from '../UI/Input';
import styles from "./MealItem.module.css";
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    return (
        <li className={styles.meal} key={props.id}>
            <div>
                <h2>{props.name}</h2>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{props.price}</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
}

export default MealItem ;