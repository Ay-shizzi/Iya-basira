"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Fresh and Hot",
    image: "/slide1.jpeg",
  },
  {
    id: 2,
    title: "Home Made Meal",
    image: "/slide2.jpg",
  },
  {
    id: 3,
    title: "Just For You",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setSlider((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  });

  return (
    <div className=" flex flex-col h-[calc(100vh-6rem)] md:h-[80vh] md:flex-row border-b-2 border-b-green-500">
      {/* TEXT CONTENT */}
      <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-green-500 font-bold md:h-full md:w-1/2 bg-green-50">
        <h1 className="text-3xl md:text-4xl xl:text-6xl text-center uppercase p-4 md:p-10">
          {data[slider].title}
        </h1>
        <Link href="/menu">
          <button className="bg-green-500 text-white px-8 py-4 rounded">
            Order Now
          </button>
        </Link>
      </div>
      {/* IMAGE CONTENT */}
      <div className="w-full h-1/2 relative md:h-full md:w-1/2">
        <Image
          src={data[slider].image}
          alt="slide 1"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default Slider;
