"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import DarkModeToggle from "./DarkModeToggle";

function NavBar() {
  const navlinks = [
    { title: "HOME", path: "#home" },
    { title: "EXPERIENCE", path: "#experience" },
    { title: "PROJECTS", path: "#projects" },
    { title: "SKILLS", path: "#skills" },
    { title: "EDUCATION", path: "#education" },
    { title: "BLOG", path: "https://medium.com/@sumedha.n.weerasekara" },
    { title: "ABOUT ME", path: "#about-me" },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0  shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <Image src="/favicon.png" width={60} height={60} alt="Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="block md:hidden text-white focus:outline-none"
        >
          {navbarOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
        <DarkModeToggle />

        {/* Menu Links */}
        <div
          className={`${
            navbarOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto  md:bg-transparent md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center">
            {navlinks.map((link, index) => (
              <li key={index} className="p-2 md:p-0">
                <Link
                  href={link.path}
                  className="text-white hover:text-[#009BD6] block px-4 py-2 md:px-0"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <button className="w-28 h-8 rounded-[30px] bg-[#009BD6]">
            HIRE ME
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
