import BackLink from "@/components/BackLink";
import Price from "@/components/Price";
import { smallchops } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const SmallChopsProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const singleProduct = smallchops.find(
    (item) => transformTitle(item.title) === id
  );

  if (!singleProduct) {
    return <p>Product not found</p>;
  }

  return (
    <div className="">
      <div className="p-4 lg:px-20 xl:px-40 text-green-500">
        <div className="flex items-center justify-between py-4">
          <BackLink />
          <Link href="/cart" className="flex items-center gap-2">
            cart <FaLongArrowAltRight />
          </Link>
        </div>
        <div className="h-[calc(100vh-10rem)] flex flex-col justify-around md:flex-row gap-8 md:items-center">
          {/* IMAGE CONTAINER */}
          {singleProduct.img && (
            <div className="relative w-full h-1/2 md:h-[70%]">
              <Image
                src={singleProduct.img}
                alt=""
                className="object-contain"
                fill
              />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="h-1/2 md:h-[70%] md:justify-center flex flex-col gap-4">
            <h1 className="text-3xl font-bold uppercase">
              {singleProduct.title}
            </h1>
            <p className="hidden md:block">{singleProduct.desc}</p>
            <Price
              img={singleProduct.img}
              title={singleProduct.title}
              price={singleProduct.price}
              id={singleProduct.id}
              options={singleProduct.options}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const transformTitle = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, "");
};

export default SmallChopsProductPage;
