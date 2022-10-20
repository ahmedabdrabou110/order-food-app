import React , {useState} from 'react'
import CartItem from './components/Cart/CartItem';
import Header from './components/Layout/Header';
import Meals from './components/meals/Meals';
import AuthContent from './components/Store/Auth';
import CartContextProvider from './components/Store/CartContextProvider';


const App = ()=> {
  const [cartIsShown , setCartIsShown] = useState(false);
  const showCart = () => {
    setCartIsShown(true);
  }

  const hideCart = ()=>{
    setCartIsShown(false);
  }


  return (
    <CartContextProvider>
      <AuthContent.Provider value={{
        cartIsShown  :cartIsShown , 
        showCart:showCart , 
        hideCart: hideCart,
      }}>
        {cartIsShown && <CartItem />}
        <Header />  
      </AuthContent.Provider>
      <main>

      <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
