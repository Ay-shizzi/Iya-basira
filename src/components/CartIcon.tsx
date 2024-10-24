"use client";

import { GrCart } from "react-icons/gr";
import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartIcon = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("CartIcon must be used within a CartProvider");
  }

  const { cartItems } = context;

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Link
      className="flex items-center gap-2 md:gap-1 bg-white text-green-500 p-1 rounded-md"
      href="/cart"
    >
      <div className="relative">
        <GrCart />
      </div>
      <span>{totalItems}</span>
    </Link>
  );
};

export default CartIcon;
