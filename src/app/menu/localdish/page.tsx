import Link from "next/link";
import React from "react";
import { local } from "@/data";
import Image from "next/image";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const transformTitle = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, "");
};

const LocalDish = () => {
  return (
    <div className="p-5 text-green-500">
      <div className="flex items-center justify-between py-4">
        <Link href="/menu" className="flex items-center gap-2">
          <FaLongArrowAltLeft /> back to menu
        </Link>
        <Link href="/cart" className="flex items-center gap-2">
          move to cart <FaLongArrowAltRight />
        </Link>
      </div>

      <div className="flex flex-wrap text-green-500">
        {local.map((items) => (
          <Link
            className="w-full h-[60vh] border-2 border-green-500 sm:w-1/2 lg:w-1/3 flex flex-col justify-between group odd:bg-green-50"
            href={`/menu/localdish/${transformTitle(items.title)}`}
            key={items.id}
          >
            {/* IMAGE CONTAINER */}
            {items.img && (
              <div className="relative h-3/4">
                <Image src={items.img} alt="" fill className="object-contain" />
              </div>
            )}

            {/* TEXT CONTAINET */}
            <div className="flex justify-between items-center font-bold h-1/5 py-3 px-6">
              <h1 className="md:text-xl">{items.title}</h1>
              <h2 className="group-hover:hidden">₦{items.price}</h2>
              <button className="bg-green-500 text-white text-xs p-2 rounded-md uppercase hidden group-hover:block">
                Add to cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LocalDish;
