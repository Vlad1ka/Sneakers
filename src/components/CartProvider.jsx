import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (obj) => {
    setCartItems((cartItems) => {
      const existingItem = cartItems.find(item => item.title === obj.title && item.size === obj.size);
      if (existingItem) {
        return cartItems.map(item =>
          item.title === obj.title && item.size === obj.size 
            ? { ...item, cardCount: item.cardCount + 1 } 
            : item
        );
      }
      return [...cartItems, { ...obj, cardCount: 1 }];
    });
  };

  const onIncrease = (title, size) => {
    setCartItems((cartItems) => 
      cartItems.map(item => 
        item.title === title && item.size === size 
          ? { ...item, cardCount: item.cardCount + 1 } 
          : item
      )
    );
  };

  const onDecrease = (title, size) => {
    setCartItems((cartItems) => 
      cartItems.map(item => 
        item.title === title && item.size === size 
          ? { ...item, cardCount: Math.max(item.cardCount - 1, 1) } 
          : item
      )
    );
  };

  const onRemove = (title, size) => {
    setCartItems((cartItems) => cartItems.filter(item => !(item.title === title && item.size === size)));
  };

  const onClear = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, onAddToCart, onIncrease, onDecrease, onRemove, onClear }}>
      {children}
    </CartContext.Provider>
  );
};