"use client";

import React, { createContext, useState, ReactNode } from "react";

//
type Option = {
  title: string;
  additionalPrice: number;
};

//
type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img?: string;
  option?: Option;
};

interface CartContextType {
  //
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, optionTitle?: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.option?.title === item.option?.title
      );
      if (existingItemIndex >= 0) {
        const updatedItems = [...prev];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        return [...prev, item];
      }
    });
  };

  const removeFromCart = (id: number, optionTitle?: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.option?.title === optionTitle)
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, getTotalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
