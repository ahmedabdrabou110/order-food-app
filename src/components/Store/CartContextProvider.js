import {useReducer} from "react";
import CartContext from "./CartContent";

const defaultCart = {
  items:[] , 
  amount:0,
}

const cartReducer = (state , action)=>{
  const updateItem = [state.item , ...action.items];
  const amountCart = +(state.amount + action.items.price * action.item.amount) ; 
  if(action.type === "ADD_TO_CART"){
    return {item : updateItem, amount : amountCart}
  }

  
  return defaultCart ; 
};



const CartContextProvider = (props)=>{

  const [cartState , dispatchCart] = useReducer(cartReducer , defaultCart);

  const addItemToCart = item => {
    dispatchCart({type : "ADD_TO_CART" , item:item});
  };

  const removeItemFormCart = id =>{
    dispatchCart({type: "REMOVE_FROM_CART", id: id});
  } ;


  const cartContext = {
    items : cartState.items , 
    amount: cartState.amount , 
    addItemToCart : addItemToCart , 
    removeItemFormCart:removeItemFormCart
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
  
}

export default CartContextProvider;