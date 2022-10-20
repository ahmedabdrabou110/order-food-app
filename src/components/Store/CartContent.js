import React from 'react'


const CartContext = React.createContext({
  items: [] , 
  totalAmount: 0 , 
  addItemToCart: ()=>{} , 
  removeItemFormCart : ()=>{}
})


export default CartContext ; 