import React, { createContext, useReducer, useMemo } from 'react';
import { cartReducer, initialState } from './cartReducer';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const value = useMemo(() => ({
    items: state.items,
    totalPrice,
    totalCount,
    dispatch
  }), [state.items, totalPrice, totalCount]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
