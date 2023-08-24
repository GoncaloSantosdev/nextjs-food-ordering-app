"use client";
import { useState } from "react";
import Link from "next/link";
// React Icons
import { HiOutlineMenuAlt3, HiOutlineShoppingCart } from "react-icons/hi";
import { IoFastFoodOutline, IoCloseOutline } from "react-icons/io5";

const menuData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Menu",
    path: "/menu",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <header className="mt-6">
      <div className="container mx-auto px-4 md:px-0 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-[28px]">
            <IoFastFoodOutline size={24} />
          </div>
          <Link href={"/"}>
            <h1 className="font-semibold text-lg">Crave Cuisine</h1>
          </Link>
        </div>
        {/* Menu Icons */}
        <div className="cursor-pointer md:hidden" onClick={handleMenu}>
          {menu ? (
            <IoCloseOutline size={20} />
          ) : (
            <HiOutlineMenuAlt3 size={20} />
          )}
        </div>
        {/* Navbar */}
        <nav className="hidden md:flex gap-12">
          {menuData.map((item, index) => (
            <li key={index} className="list-none">
              <Link href={item.path} className="hover:text-red-500 transition">
                {item.title}
              </Link>
            </li>
          ))}
        </nav>
        {/* CTA */}
        <div className="hidden md:flex md:items-center gap-4">
          <Link href={"/cart"}>
            <HiOutlineShoppingCart size={20} />
          </Link>
          <Link href={"/login"} className="btn-primary">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
