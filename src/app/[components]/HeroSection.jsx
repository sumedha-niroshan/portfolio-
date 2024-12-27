import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function HeroSection() {
  return (
    <>
      <div className="md:mt-2 md:flex md:justify-between md:items-center">
        <div>
          <div className="flex text-textcolor text-xl ">
            Hello,<p className="text-myblue"> I'm </p>
          </div>
          <div className="text-textcolor text-4xl lg:text-6xl font-medium ">
            Sumedha Niroshan
          </div>
          <div className="text-textcolor text-lg lg:text-xl font-semibold">
            Associte DevOps Engineer
          </div>
          <p className="text-textcolor mt-5">
            Passionate Associate DevOps Engineer with 1 year of experience in
            Linux, Docker, Kubernetes, and AWS. I specialize in cloud-native
            infrastructure, CI/CD automation, and system reliability, with
            additional skills in web development using the MERN stack.
          </p>

          <p className="text-textcolor mt-4">FIND ME</p>
          <div className="flex gap-3 mt-2">
            <Link
              href={"https://www.linkedin.com/in/sumedha-niroshan/"}
              target="_blank"
            >
              <FaLinkedin className="w-8 h-8 text-myblue" />
            </Link>
            <Link href={"https://github.com/sumedha-niroshan"} target="_blank">
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
          <div className="flex gap-3 mt-6">
            <button className="w-36 h-8 rounded-[30px] bg-myblue text-textcolor hover:bg-[#007AAE] ">
              DOWNLOAD CV
            </button>
            <button className="w-24 h-8 rounded-[30px] bg-myblue text-textcolor hover:bg-[#007AAE] ">
              HIRE ME
            </button>
          </div>
        </div>
        <div className="mt-12">
          <Image
            src="/sn.png"
            width={1200}
            height={1200}
            alt="Sumedha Niroshan"
          />
        </div>
      </div>
      <div className="w-full h-[1px] bg-black lg:mt-6"></div>
    </>
  );
}

export default HeroSection;
