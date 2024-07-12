"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: {children: any}) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: any) => setCart([...cart, product]);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};