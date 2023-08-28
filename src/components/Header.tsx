"use client";
import { useState } from "react";
import Link from "next/link";
// Auth
import { signOut, useSession } from "next-auth/react";
// React Icons
import { HiOutlineMenuAlt3, HiOutlineShoppingCart } from "react-icons/hi";
import { IoFastFoodOutline, IoCloseOutline } from "react-icons/io5";
import Image from "next/image";

const menuData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Categories",
    path: "/categories",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const { data, status } = useSession();
  const [menu, setMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
          <div>
            {status === "authenticated" ? (
              <div>
                <Image
                  src={data?.user?.image}
                  alt={data?.user?.name}
                  onClick={toggleDropdown}
                  width={35}
                  height={35}
                  className="rounded-full cursor-pointer"
                />

                {/* Dropdown menu */}
                <div
                  id="dropdown"
                  className={`${
                    isDropdownOpen ? "block absolute right-20 mt-4" : "hidden"
                  } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 hover:bg-gray-100 border-b"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/orders"
                        className="block px-4 py-2 hover:bg-gray-100 border-b"
                      >
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        onClick={() => {
                          signOut();
                        }}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link href={"/login"} className="btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
