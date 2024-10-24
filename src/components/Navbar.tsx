import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 p-4 md:h-18 lg:px-20 xl:px-30 text-green-500 flex items-center justify-between border-b-2 border-b-green-500 uppercase">
      {/* LOGO */}
      <div className="text-xl font-bold flex items-center gap-4">
        <Image src="/logo.png" alt="" width={30} height={30} />
        <Link href="/">Iya Basira</Link>
      </div>

      <div className="flex items-center justify-center gap-4">
        {/* MENU LINKS */}
        <div className="hidden md:flex gap-4">
          <Link href="/">Homepage</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/">Contact</Link>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Menu />
        </div>

        {/* USER MENU LINKS */}
        <div className="hidden md:flex md:items-center gap-4">
          <CartIcon />
          {!user ? (
            <Link href="/login">Login</Link>
          ) : (
            <Link href="/orders">Orders</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
