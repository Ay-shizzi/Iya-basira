"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Category", url: "#" },
  { id: 3, title: "Collections", url: "#" },
  { id: 4, title: "Contact Us", url: "#" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  //USER MANIPULATION
  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          className="cursor-pointer"
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          className="cursor-pointer"
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-6rem)] bg-green-500 text-white flex items-center justify-center flex-col gap-8 z-10">
          {links.map((link) => (
            <Link href={link.url} key={link.id} onClick={() => setOpen(false)}>
              {link.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <div onClick={() => setOpen(false)}>
            <CartIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
