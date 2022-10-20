import React, { useRef, useState } from 'react'
import Input from '../UI/Input';
import styles from "./MealItemForm.module.css";
const MealItemForm = (props) => {
    const inputAmountRef = useRef();
    const [formIsValid , setFormIsValid] = useState(true);

    const addCartHandler = event =>{
      event.preventDefault();

      const inputAmount =  inputAmountRef.current.value ;
      const inputAmountNumber  = +inputAmount ; 

      if(inputAmount.trim().length === 0 || inputAmount.trim().length <1 || inputAmount.trim().length > 10) {
        setFormIsValid(false);
        return ;
      }

      props.onAddCart(inputAmountNumber);
    }

    return (
        <form className={styles.form} onSubmit={addCartHandler}>
            <Input ref={inputAmountRef} label="Amount" id ="amount" input ={{
                type : "number",
                max : "20" , 
                min : "1" , 
                defaultValue : "1" , 
                step :"1" ,
            }} />
            <button>+ add</button>
            {!formIsValid && <p>Please , Input valid number (1 - 10)</p>}
        </form>
    )
}

export default MealItemForm ;