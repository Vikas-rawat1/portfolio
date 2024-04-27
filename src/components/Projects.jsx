import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import Contact from "./Contact";

function Projects() {
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
      imageUrl: "Images/works/daz.jpg",
      projectLink: "/project",
      githubLink: "",
      description: "In Process...",
    },
    {
      imageUrl: "Images/works/1.jpg",
      projectLink: "https://daz3d-clone.netlify.app",
      githubLink: "https://github.com/Vikas-rawat1/daz3d-clone",
      description:
        "The Daz3D clone UI includes basic features like 3D model display, product listing, user account management, shopping cart, search, and responsive design for an intuitive browsing experience with React.",
    },
    {
      imageUrl: "Images/works/clothing.jpg",
      projectLink: "https://vikas-rawat1.github.io/clothing_landing_page/",
      githubLink: "https://github.com/Vikas-rawat1/clothing_landing_page",
      description:
        "THis is Simple landing page of clothing brand made up with HTML,CSS and JavaScript",
    },
  ];

  const ProjectThumbnail = ({
    imageUrl,
    projectLink,
    githubLink,
    description,
  }) => (
    <Tilt
      options={defaultOptions}
      style={{ height: 300, width: 300 }}
      className="m-auto mb-20 lg:mr-10"
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt="Thumbnail"
          className="w-full object-cover h-72 fit"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 rounded-md p-4">
          <Link
            to={projectLink}
            className="text-white  text-lg mb-2 hover:text-gray-300"
          >
            <p>{description}</p>
          </Link>

          <div className="flex justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-md mr-4">
              <Link to={projectLink}>View Project</Link>
            </button>
            <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-md">
              <Link to={githubLink}>GitHub Repo</Link>
            </button>
          </div>
        </div>
      </div>
    </Tilt>
  );

  return (
    <>
      <div className="bg-black">
        <p className="text-3xl text-center mt-20 lg:mt-40">My Works</p>
        <div className="mt-20 lg:flex lg:flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectThumbnail
              key={index}
              imageUrl={project.imageUrl}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
              description={project.description}
            />
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Projects;
