import React from "react";
import Image from "next/image";
import TimelineItem from "./TimelineItem";
import { FaUserGraduate } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

const cetificates = [
  {
    title: "Solution Architect Associate (Ongoing)",
    image: "/cetification/image.png",
    liveLink: "",
    repoLink: "",
  },
  {
    title: "Cloud Practitioner Foundational (Ongoing)",
    image: "/cetification/saa.png",
    liveLink: "",
    repoLink: "",
  },
];

function EducationSection() {
  return (
    <div>
      <div id="education" className="text-myblue text-base font-bold mt-5">
        Education
      </div>
      <div className="flex items-center gap-2 space-x-2 mt-2">
        <FaUserGraduate className="w-8 h-8 text-textcolor" />
        <p className="text-2xl font-semibold text-textcolor ">Education</p>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 mt-5">
        {/* Logo and Company Information */}
        <div className="flex items-center gap-4 ">
          <div className="">
            <Image
              src="/edu/uoc.png"
              width={50}
              height={50}
              alt="University of Colombo"
              className="rounded-full shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-textcolor md:text-2xl">
              University of Colombo
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
              Sri Lanka
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l-2 border-blue-500 pl-3 md:pl-6 ml-5">
        <TimelineItem
          role="Bachelor of  Physical Science"
          period="Jan 2020  -   Sep 2023"
          points={[
            "pecialized in Computer Science and Physical Computing, focusing on theoretical foundations, practical applications, and innovative technologies.",
          ]}
        />
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 mt-5">
        {/* Logo and Company Information */}
        <div className="flex items-center gap-4 ">
          <div className="">
            <Image
              src="/edu/arcc.png"
              width={50}
              height={50}
              alt="Arcc logo"
              className="rounded-full shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-textcolor md:text-2xl">
              A Rathnayake Central college, Kandy
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
              Sri Lanka
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l-2 border-blue-500 pl-3 md:pl-6 ml-5">
        <TimelineItem
          role="GCE Advanced Level Examination"
          period="Science Stream | May 2015 - Aug 2017"
          points={["Combined Mathematics: B", "Physics: B", "Chemistry: B"]}
        />
      </div>

      <div className="flex items-center gap-2 space-x-2 mt-14 mb-10 ">
        <PiCertificateFill className="w-8 h-8 text-textcolor" />
        <p className="text-2xl font-semibold text-textcolor ">Certification</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cetificates.map((cetificate, index) => (
          <div
            key={index}
            className="relative border-2 border-myblue p-4 rounded-lg shadow-lg flex flex-col lg:w-[350px] "
          >
            <img
              src={cetificate.image}
              alt={cetificate.title}
              className="rounded-lg mb-4 shadow-xl"
            />
            <h3 className="text-lg font-bold text-textcolor">
              {cetificate.title}
            </h3>

            <div className="flex justify-between  mt-4">
              <a
                href={cetificate.liveLink}
                target="_blank"
                className="px-4 py-2 bg-myblue text-sm rounded hover:bg-blue-600"
                rel="noopener noreferrer"
              >
                View
              </a>
              <a
                href={cetificate.repoLink}
                target="_blank"
                className="px-4 py-2 bg-myblue text-sm rounded hover:bg-blue-600"
                rel="noopener noreferrer"
              >
                verify
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-[1px] bg-gray-400 lg:mt-6"></div>
    </div>
  );
}

export default EducationSection;
