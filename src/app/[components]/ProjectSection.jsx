"use client";

import React from "react";
import { useState } from "react";

const projects = [
  {
    title: "CI/CD Pipeline",
    technology: "Docker, Jenkins",
    image: "/projects/devops-1.png",
    liveLink: "#",
    repoLink: "#",
    category: "DevOps",
  },
  {
    title: "Hotel Landing page",
    technology: "Next.js",
    image: "/projects/Hotel_project.jpg",
    liveLink: "https://creativa-heven.netlify.app/",
    repoLink: "https://github.com/sumedha-niroshan/hotel-landing-page",
    category: "Web Development",
  },
  {
    title: "Hitjob.lk Web Application",
    technology: "Nextjs, MongoDB, Node.js, Tailwind CSS",
    image: "/projects/hit-job.PNG",
    liveLink: "http://hitjob.lk/",
    repoLink: "https://github.com/sumedha-niroshan/hitjob.lk",
    category: "Web Development",
  },
  {
    title: "Mybrid Automobiles",
    technology: "Wordpress",
    image: "/projects/mybridautomobiles.PNG",
    liveLink: "https://mybridautomobiles.lk/",
    repoLink: "#",
    category: "Web Development",
  },
  {
    title: "VTAS Associates",
    technology: "Wordpress",
    image: "/projects/vtas.PNG",
    liveLink: "https://www.vtas.lk/",
    repoLink: "#",
    category: "Web Development",
  },

  {
    title: " Modern Real Estate Marketplace",
    technology: "MERN Stack , Redux toolkit ,  Tailwind Css , Firebase",
    image: "/projects/mern-state.PNG",
    liveLink: "#",
    repoLink: "https://github.com/sumedha-Niroshan/mern-estate",
    category: "Web Development",
  },
];

function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredProjects = projects.filter((project) =>
    activeCategory === "ALL" ? true : project.category === activeCategory
  );

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div id="projects">
      <div className="text-myblue text-base font-bold my-5">Projects</div>
      {/* Tabs */}
      <div className="flex  mb-6">
        {["ALL", "DevOps", "Web Development"].map((category) => (
          <button
            key={category}
            className={`px-4 py-1 text-xs rounded-tr-3xl border-2 border-gray-300 ${
              activeCategory === category
                ? "bg-blue-500 text-textcolor"
                : "bg-transparent hover:bg-gray-600 text-textcolor"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paginatedProjects.map((project, index) => (
          <div
            key={index}
            className="relative border-2 border-myblue p-4 rounded-lg shadow-lg flex flex-col"
          >
            <span className="absolute top-4 right-4 bg-myblue text-white text-xs  px-2 py-1 rounded">
              {project.category}
            </span>
            <div className=" mb-4 w-full h-56">
              <img
                src={project.image}
                alt={project.title}
                className=" inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <h3 className="text-lg font-bold text-textcolor">
              {project.title}
            </h3>
            <p className="text-sm text-textcolor">{`Technology: ${project.technology}`}</p>
            <div className="flex justify-between  mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                className="px-4 py-2 bg-myblue text-sm rounded hover:bg-blue-600"
                rel="noopener noreferrer"
              >
                Live Project
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                className="px-4 py-2 bg-myblue text-sm rounded hover:bg-blue-600"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6 text-sm">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="text-textcolor hover:underline"
        >
          &lt;&lt; Previous
        </button>
        <span className="text-textcolor">{currentPage}</span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(
                prev + 1,
                Math.ceil(filteredProjects.length / itemsPerPage)
              )
            )
          }
          className="text-textcolor hover:underline"
        >
          Next &gt;&gt;
        </button>
      </div>
      <div className="w-full h-[1px] bg-gray-400 mt-3 lg:mt-6"></div>
    </div>
  );
}

export default ProjectSection;
