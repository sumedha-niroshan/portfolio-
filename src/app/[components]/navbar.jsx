"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ThemeToggle from "./ThemeToggle";

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
    <nav className="fixed top-0 left-0 right-0 bg-background  shadow-md z-50 bg-opacity-100">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <Image src="/favicon.png" width={60} height={60} alt="Logo" />
        </Link>

        {/* Mobile Menu and Dark Mode Button (Together in a container) */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-textcolor focus:outline-none"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          <ThemeToggle />
        </div>

        {/* Menu Links */}
        <div
          className={`${
            navbarOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-background  md:bg-transparent md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center w-full md:w-auto">
            {navlinks.map((link, index) => (
              <li key={index} className="p-2 md:p-0 w-full md:w-auto">
                <Link
                  href={link.path}
                  className="text-textcolor hover:text-myblue block text-center px-4 py-2 md:px-0 font-semibold"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* "Hire Me" Button */}
        <div className="hidden md:flex  items-center space-x-4">
          <button className="w-28 h-8 rounded-[30px] bg-myblue text-textcolor hover:bg-[#007AAE] hidden lg:block">
            HIRE ME
          </button>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Dark Mode Toggle (When Menu is Open)
      {navbarOpen && (
        <div className="md:hidden flex justify-center mt-2">
          <ThemeToggle />
        </div>
      )} */}
    </nav>
  );
}

export default NavBar;
