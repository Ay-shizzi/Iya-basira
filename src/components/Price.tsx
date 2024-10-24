"use client";

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  img?: string;
  price: number;
  id: number;
  title: string;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ img, price, id, title, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  // TOASTIFY NOTIFICATION
  const notify = () =>
    toast.success("Added To Cart", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Price must be used within a CartProvider");
  }

  const handleAddToCart = () => {
    const item = {
      img,
      id,
      title,
      price: options ? price + options[selected].additionalPrice : price,
      quantity,
      option: options ? options[selected] : undefined,
    };

    context.addToCart(item);
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-2xl">₦{total}</h2>
      {/* OPTION CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 ring-1 ring-green-400 rounded-md"
            style={{
              background: selected === index ? "rgb(74 222 128)" : "white",
              color: selected === index ? "white" : "rgb(74 222 128)",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY CONTAINER */}
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 ring-1 ring-green-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 40 ? prev + 1 : 40))}
            >
              {">"}
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            handleAddToCart();
            notify();
          }}
          className="uppercase bg-green-500 text-white w-5/6 p-3 ring-1 ring-green-400"
        >
          Add to Cart
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Price;
