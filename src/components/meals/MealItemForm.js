import React from 'react'
import Input from '../UI/Input';
import styles from "./MealItemForm.module.css";
const MealItemForm = () => {
    return (
        <form className={styles.form}>
            <Input label="Amount" id ="amount" input ={{
                type : "number",
                max : "20" , 
                min : "1" , 
                defaultValue : "1" , 
                step :"1" ,
            }} />
            <button>+ add</button>
        </form>
    )
}

export default MealItemForm ;