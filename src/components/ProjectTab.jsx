import React from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

function ProjectTab() {
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const projects = [
    {
      imageUrl: "Images/works/anima.jpg",
      projectLink: "https://vikas-rawat1.github.io/anima/",
      description:
        "A simple landing page with animation showcasing modern web design principles and engaging visuals.",
    },
    {
      imageUrl: "Images/works/1.jpg",
      projectLink: "https://daz3d-clone.netlify.app",
      description:
        "A UI clone of Daz3D featuring 3D model displays, product listings, user account management, and a shopping cart, all designed with React for a seamless user experience.",
    },
    {
      imageUrl: "Images/works/clothing.jpg",
      projectLink: "https://vikas-rawat1.github.io/clothing_landing_page/",
      description:
        "A stylish clothing brand landing page built with HTML, CSS, and JavaScript, effectively showcasing brand aesthetics and product offerings.",
    },
    {
      imageUrl: "Images/works/obys.jpg",
      projectLink: "https://obysreplica.netlify.app/",
      description:
        "Dynamic website for a fictional agency with engaging animations and modern design, built with HTML, CSS, JavaScript, and GSAP.",
    },
    {
      imageUrl: "Images/works/cinecraze.jpg",
      projectLink: "https://cinecraze.netlify.app",
      description:
        "A movie discovery tool with features like search, detailed information, and watchlists, designed with React, Redux, and Tailwind CSS to enhance user experience and accessibility.",
    },
    {
      imageUrl: "Images/works/roastery.jpg",
      projectLink: "https://roasterycoffee.netlify.app/",
      description:
        "A reimagined coffee website featuring modern design elements, interactive components, and rich media content for a captivating experience.",
    },
  ];

  const ProjectThumbnail = ({ imageUrl, projectLink, description }) => (
    <Tilt
      options={defaultOptions}
      style={{ height: 300, width: 300 }}
      className="m-auto mb-10 md:mb-10 lg:mr-6"
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt="Thumbnail"
          className="w-full object-cover h-72"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 rounded-md p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg mb-4">{description}</p>
          <div className="flex justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-md">
              <Link to={projectLink} className="block">
                View Project
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Tilt>
  );
  return (
    <div className="bg-black py-10">
      <p className="text-3xl text-center text-white mb-10">
        Showcasing my <span>Art of Work</span>
      </p>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <ProjectThumbnail
            key={index}
            imageUrl={project.imageUrl}
            projectLink={project.projectLink}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectTab;
