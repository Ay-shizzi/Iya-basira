import React from "react";
import { menu } from "@/data";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          className="w-full bg-cover p-8"
          href={category.slug}
          key={category.id}
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color}`}>
            <h1 className="font-bold text-3xl uppercase">{category.title}</h1>
            <p className="my-8 text-sm">{category.desc}</p>
            <button
              className={`hidden md:block ${
                category.color === "white" ? "bg-white" : "bg-black"
              } text-${
                category.color === "black" ? "white" : "green-500"
              } p-2 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
