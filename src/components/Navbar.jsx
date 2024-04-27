import Typewriter from "typewriter-effect";
import Button from "@mui/material/Button";
// import Stack from '@mui/material/Stack';
import "../App.css";
import About from "./About";
// import Menu from "../components/Menu";

function Navbar() {
  return (
    <>
      <div className="hidden lg:flex lg:justify-between lg:list-none lg:m-auto lg:items-center bg-black text-white">
        <div>
          <ul>
            <li className="font-saira-stencil font-bold text-2xl">
              <img src="Images/head.gif" alt="" className="h-16" />
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex font-poppins font-bold gap-8">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
        <div>
          <ul className="flex font-poppins font-bold mr-10">
            <li>Contact</li>
          </ul>
        </div>
      </div>
      {/* <Menu /> */}

      {/* Mobile Logo  */}
      <div className="bg-black">
        <div className="lg:hidden justify-center flex items-center font-saira-stencil font-bold text-2xl">
          <img src="Images/head.gif" alt="Gif" className="h-14" />
        </div>
      </div>
      <div className=" relative">
        <img src="Images/bg.gif" alt="" className="w-full h-screen" />
        <div className="lg:text-left ml-24 top-60  absolute lg:top-40 text-white m-auto lg:ml-60  ">
          <p className="text-2xl lg:ml-0  lg:text-xl">Hello 👋</p>
          <h1 className="text-3xl font-sedan font-bold">
            I,m <span className="text-red-500">Vikas Rawat</span>
          </h1>
          <p className="text-2xl">
            <Typewriter
              options={{
                strings: ["Web Developer", "Web Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <p className="mt-10">
            <Button
              variant="contained"
              href="#contained-buttons"
              className="bg-black"
            >
              View Resume
            </Button>
          </p>
        </div>
      </div>
      <About />
    </>
  );
}

export default Navbar;
