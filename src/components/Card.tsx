import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="text-green-500">
      {/* WRAPPER */}
      <div className="text-3xl md:text-5xl p-5 md:p-10 text-center">
        <h1>What we Serve</h1>
      </div>
      <div className=" mx-auto p-2 sm:p-5 md:p-8">
        {/* Horizontal Scroll Container */}
        <div className="overflow-x-scroll no-scrollbar">
          <div className="flex gap-10">
            {featuredProducts.map((items) => (
              <div
                key={items.id}
                className="rounded overflow-hidden shadow-lg flex-shrink-0 w-[100vw] sm:w-[45vw] lg:w-[31vw]"
              >
                {items.img && (
                  <div className="relative">
                    <a href="#">
                      <Image
                        className="w-full h-60 object-cover"
                        src={items.img}
                        alt={items.title}
                        width={200}
                        height={200}
                      />
                      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                    </a>
                    <a href="#!">
                      <div className="absolute bottom-0 left-0 bg-green-500 px-4 py-2 text-white text-sm hover:bg-white hover:text-green-500 transition duration-500 ease-in-out">
                        ₦{items.price}
                      </div>
                    </a>
                  </div>
                )}
                <div className="px-6 py-4">
                  <a
                    href="#"
                    className="font-semibold text-lg inline-block hover:text-green-500 transition duration-500 ease-in-out"
                  >
                    {items.title}
                  </a>
                  <p className="text-gray-500 text-sm">{items.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
