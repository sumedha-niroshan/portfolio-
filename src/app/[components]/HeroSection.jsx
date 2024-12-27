import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function HeroSection() {
  return (
    <div>
      <div>Hello, I'm</div>
      <div>Sumedha Niroshan</div>
      <div>Associte DevOps Engineer</div>
      <p>
        Passionate Associate DevOps Engineer with 1 year of experience in Linux,
        Docker, Kubernetes, and AWS. I specialize in cloud-native
        infrastructure, CI/CD automation, and system reliability, with
        additional skills in web development using the MERN stack.
      </p>

      <p>FIND ME</p>
      <div>
        <Link
          href={"https://www.linkedin.com/in/sumedha-niroshan/"}
          target="_blank"
        >
          <FaLinkedin className="w-8 h-8" />
        </Link>
        <Link href={"https://github.com/sumedha-niroshan"} target="_blank">
          <FaGithub className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
