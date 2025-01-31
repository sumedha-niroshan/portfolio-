import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import ContactForm from "./ContactForm";

function AboutMeSection() {
  return (
    <div>
      <div id="about-me" className="text-myblue text-base font-bold mt-5">
        About Me
      </div>

      <div className="lg:flex lg:gap-20 items-center ">
        <div className="md:flex gap-5 m-5 items-center">
          <Image
            src="/about-me/sn.jpg"
            alt="Sumedha Niroshan"
            width={150}
            height={150}
            className="border-4 border-myblue"
          />
          <div className="">
            <div className="text-textcolor text-4xl font-bold">
              Sumedha Niroshan
            </div>
            <p className="text-textcolor text-lg font-light">
              Associate DevOps Engineer
            </p>
            <div className="flex gap-3 mt-2">
              <Link
                href={"https://www.linkedin.com/in/sumedha-niroshan/"}
                target="_blank"
              >
                <FaLinkedin className="w-8 h-8 text-myblue" />
              </Link>
              <Link
                href={"https://github.com/sumedha-niroshan"}
                target="_blank"
              >
                <FaGithub className="w-8 h-8 text-myblue" />
              </Link>
              <Link
                href={"https://discord.com/users/sumedha_34060"}
                target="_blank"
              >
                <FaDiscord className="w-8 h-8 text-myblue" />
              </Link>
              <Link
                href={"https://www.behance.net/sumedhaniroshanw"}
                target="_blank"
              >
                <FaBehanceSquare className="w-8 h-8 text-myblue" />
              </Link>
              <Link
                href={
                  "https://www.instagram.com/sumedha_niroshan/profilecard/?igsh=a3JmOWd4dW00YnFr"
                }
                target="_blank"
              >
                <FaInstagramSquare className="w-8 h-8 text-myblue" />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:flex gap-10">
          <div className="">
            <div className="my-3">
              <p className="text-textcolor text-lg font-bold">Email</p>
              <p className="text-textcolor text-lg font-thin">
                sumedha.n.weerasekara@gmail.com
              </p>
            </div>
            <div className="my-3">
              <p className="text-textcolor text-lg font-bold">Location</p>
              <p className="text-textcolor text-lg font-thin">
                Kandy,Sri Lanka
              </p>
            </div>
          </div>
          <div>
            <div className="my-3">
              <p className="text-textcolor text-lg font-bold">Bron On</p>
              <p className="text-textcolor text-lg font-thin">27th Jan 1999 </p>
            </div>
            <div className="my-3">
              <p className="text-textcolor text-lg font-bold">Status</p>
              <p className="text-textcolor text-lg font-thin">Unmarried</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-md">
        <h2 className="text-textcolor text-lg font-bold mb-4">
          Work with Me via Freelance Platforms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Fiverr */}
          <div className="flex gap-4 items-center justify-center border border-gray-700 p-4 rounded-md">
            <img
              src="/about-me/images.png"
              alt="Fiverr"
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
            <div className="flex flex-col items-center md:items-start">
              <span className="text-textcolor font-semibold text-base md:text-lg lg:text-xl">
                Fiverr
              </span>
              <a
                href="#"
                className="mt-2 px-4 py-1 text-sm md:text-base bg-myblue text-white rounded-[30px] hover:bg-blue-600 transition-all"
              >
                Hire Me
              </a>
            </div>
          </div>
          {/* Upwork */}
          <div className="flex gap-4 items-center justify-center border border-gray-700 p-4 rounded-md">
            <img
              src="/about-me/upwork.jpg"
              alt="Upwork"
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
            <div className="flex flex-col items-center md:items-start">
              <span className="text-textcolor font-semibold text-base md:text-lg lg:text-xl">
                Upwork
              </span>
              <a
                href="#"
                className="mt-2 px-4 py-1 text-sm md:text-base bg-myblue text-white rounded-[30px] hover:bg-blue-600 transition-all"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}

export default AboutMeSection;
