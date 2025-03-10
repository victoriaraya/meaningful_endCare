"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative text-[#45260C] bg-gradient-to-b from-[#CDBA9D] to-white lg:h-60 h-16">
      <div className="flex justify-center items-center">
        <button
          className="text-3xl lg:hidden focus:outline-none z-40"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      <ul
        className={`flex flex-col lg:flex-row gap-3 lg:gap-24 justify-center items-center text-center text-2xl w-full lg:h-full absolute top-0 left-0 mt-14 lg:mt-0 sm:py-3 sm:px-8 z-20 ${
          isOpen ? "block" : "hidden"
        } lg:flex bg-gradient-to-b from-white to-[#CDBA9D] lg:from-[#CDBA9D] lg:to-white`}
      >
        <li className="relative group lg:hidden pt-2">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#45260C] transition-all duration-300 sm:group-hover:w-full sm:group-hover:left-0"></span>
        </li>
        <li className="relative group lg:pr-4">
          <Link href="/faq" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#45260C] transition-all duration-300 sm:group-hover:w-10/12 sm:group-hover:left-0"></span>
        </li>
        <li className="relative group lg:pr-4">
          <Link href="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#45260C] transition-all duration-300 sm:group-hover:w-10/12 sm:group-hover:left-0"></span>
        </li>
        <li className="relative group hidden lg:block">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src={"/images/logo.png"}
              alt="meaningful endcare logo"
              width={300}
              height={200}
              quality={100}
            />
          </Link>
        </li>
        <li className="relative group">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#45260C] transition-all duration-300 sm:group-hover:w-full sm:group-hover:left-0"></span>
        </li>
        <li className="relative group sm:pb-0 pb-2">
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#45260C] transition-all duration-300 sm:group-hover:w-full sm:group-hover:left-0"></span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
