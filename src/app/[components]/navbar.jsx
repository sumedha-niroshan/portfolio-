"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="fixed mx-auto top-0 right-0 left-0 border-black ">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/">
          <Image src="/favicon.png" width={70} height={70} alt="Logo" />
        </Link>
      </div>

      <div className="mobile-menu block md:hidden">
        {!navbarOpen ? (
          <button
            onClick={() => setNavbarOpen(true)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={() => setNavbarOpen(false)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </nav>
  );
}

export default navbar;
