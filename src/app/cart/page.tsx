"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CartContext } from "@/components/CartContext";
import Link from "next/link";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackLink from "@/components/BackLink";

const CartPage = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("CartPage must be used within a CartProvider");
  }

  const { cartItems, removeFromCart, getTotalItems } = context;

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const serviceCost = 0;
  const deliveryCost = 2500;
  const total = subtotal + serviceCost + deliveryCost;

  // TOASTIFY NOTIFICATION
  const notify = () =>
    toast.error("Removed From Cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col text-green-500 md:flex-row border-b-2 border-green-500">
      <div className="h-1/2 p-4 flex flex-col  overflow-scroll no-scrollbar md:h-full md:w-2/3 xl:w-1/2">
        <BackLink />
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id + (item.option?.title || "")}
              className="flex items-center justify-between mb-4"
            >
              <Image
                src={item.img || ""}
                alt={item.title}
                width={100}
                height={100}
              />
              <div className="w-[100px] md:w-[200px]">
                <h1 className="uppercase text-sm md:text-xl font-bold">
                  {item.title}
                </h1>
                {item.option && <span>{item.option.title}</span>}
              </div>
              <div className="w-14 md:w-20">
                <h2 className="font-bold text-sm md:text-base">
                  ₦{item.price * item.quantity}
                </h2>
                <span>({item.quantity})</span>
              </div>
              <span
                className="cursor-pointer text-2xl text-red-500 hover:scale-110"
                onClick={() => {
                  removeFromCart(item.id, item.option?.title);
                  notify();
                }}
              >
                <IoCloseCircleOutline />
              </span>
            </div>
          ))
        ) : (
          <p className="text-center text-lg font-bold">Cart is Empty</p>
        )}
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-green-100 flex flex-col justify-center gap-4 md:h-full md:w-1/3 xl:w-1/2">
        <div className="flex justify-between">
          <span>Subtotal ({getTotalItems()} items)</span>
          <span>₦{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>₦{serviceCost}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span>₦{deliveryCost}</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span>Total (Incl. Tax)</span>
          <span>₦{total}</span>
        </div>
        <button className="bg-green-500 text-white p-3 rounded-md w-1/2 self-end">
          <Link href="/orders">CHECKOUT</Link>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartPage;
