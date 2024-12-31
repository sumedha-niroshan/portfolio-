import React from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  const navlinks = [
    { title: "Home", path: "#home" },
    { title: "Experience", path: "#experience" },
    { title: "Projects", path: "#projects" },
    { title: "Skills", path: "#skills" },
    { title: "Education", path: "#education" },
    { title: "Blog", path: "https://medium.com/@sumedha.n.weerasekara" },
    { title: "About Me", path: "#about-me" },
  ];

  return (
    <div className=" text-textcolor py-8">
      {/* Footer Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8  ">
        {/* Branding Section */}
        <div>
          <div className="flex items-center space-x-4">
            <Image src={"/favicon.png"} alt={"Logo"} width={50} height={50} />
            <div className="text-2xl font-bold">
              Sumedha <br /> Niroshan
            </div>
          </div>
          <p className="mt-4 text-textcolor text-sm md:text-base">
            Thank you so much for visiting the site.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-bold text-lg mb-4">Quick Links</p>
          <ul className="space-y-2">
            {navlinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="text-textcolor hover:text-gray-200 transition"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Interest Section */}
        <div>
          <p className="font-bold text-lg mb-4">Interest</p>
          <ul className="space-y-2">
            <li>Machine Learning</li>
            <li>Cybersecurity</li>
            <li>MLOps</li>
            <li>Teaching</li>
          </ul>
        </div>

        {/* Contact Section */}

        <div>
          <div>
            <p className="font-bold text-lg mb-4">Contact Me</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-textcolor" />
                <span className="text-textcolor">+94 71 248 9345</span>
              </li>
              <li className="flex items-center gap-2">
                <MdEmail className="text-textcolor w-5 h-5" />
                <span className="text-textcolor text-sm">
                  sumedha.n.weerasekara@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center  mt-4 border-t border-gray-700 pt-2 ">
        <p>
          &copy; {new Date().getFullYear()} Sumedha Niroshan. All rights
          reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
