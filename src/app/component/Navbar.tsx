"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between xs:flex-row py-2 border-b-2 border-yellow-300 bg-rose-200">
      <nav className="flex items-center justify-between w-full px-4">
        {/* Logo */}
        <Link href={"/"} className="text-3xl text-dark dark:text-light">
          AQSA<span className="text-3xl text-pink-700">AURA</span>
        </Link>

        {/* Hamburger Icon for Small Screens */}
        <button
          className="lg:hidden text-3xl sm:text-sm text-dark dark:text-light -ml-4"
          onClick={toggleMenu}
        >
          {isOpen ? "X" : "☰"}
        </button>

        {/* Menu Items for Desktop and Large Screens */}
        <div
          className={`${
            isOpen ? "flex flex-col items-center gap-y-4" : "hidden"
          } lg:flex lg:flex-row lg:gap-x-8 font-bold uppercase`}
        >
          <Link
            href={"/"}
            className="sm:text-xl  text-dark dark:text-light hover:text-pink-700 transition"
          >
            Home
          </Link>
          <Link
            href={"/About"}
            className="sm:text-xl text-dark dark:text-light hover:text-pink-700 transition"
          >
            About
          </Link>
          <Link
            href={"/Contact"}
            className="sm:text-xl text-dark dark:text-light hover:text-pink-700 transition"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
