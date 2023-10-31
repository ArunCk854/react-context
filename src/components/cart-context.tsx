import { createContext } from 'react';
import { useState } from 'react';

const CartContext = createContext<any[]>([]);

const  CartProvider = (props: any) => {
    const [cartItems, setCartItems] =useState([])
    return (
      <CartContext.Provider value={[cartItems, setCartItems]}>
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export { CartProvider, CartContext}