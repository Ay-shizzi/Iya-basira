import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-green-300 h-screen flex flex-col md:flex-row md:h-[70vh] p-6">
      {/* TEXT CONTAINER */}
      <div className="flex h-2/3 sm:h-1/2 md:h-full flex-col justify-center text-center items-center gap-4 md:text-start md:items-start">
        <h1 className="text-white font-bold text-2xl min-[320px]:text-4xl xl:text-6xl capitalize">
          delicious homemade meal
        </h1>
        <p className="text-white text-sm min-[320px]-text-lg xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est
          quasi eius corrupti ipsa omnis.
        </p>
        <CountDown />
        <button className="bg-green-500 text-white rounded-md p-2 md:py-3 md:px-6 ">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="h-1/3 sm:h-1/2 md:h-full w-full relative ">
        <Image
          src="/PepperWings.png"
          alt="offer image"
          fill
          className="object-contain "
        />
      </div>
    </div>
  );
};

export default Offer;
