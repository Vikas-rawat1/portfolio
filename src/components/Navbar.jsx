import Typewriter from "typewriter-effect";
import Button from "@mui/material/Button";
// import Stack from '@mui/material/Stack';
import "../App.css";
import About from "./About";
// import Menu from "../components/Menu";
import { Link } from "react-router-dom";
// import { Document, Page } from "react-pdf";
import { Document, Page } from '@react-pdf/renderer';
function Navbar() {
  const pageUrl = "Images/vikasresume.pdf";
  return (
    <>
      <div className="hidden lg:flex lg:justify-between lg:list-none lg:m-auto lg:items-center bg-black text-white">
        <div>
          <ul>
            <li className="font-saira-stencil font-bold text-2xl">
              <img src="Imagessdfsadfasdfwe5wasdfasdfewr/head.gif" alt="" className="h-16" />
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
        <div className="lg:grid lg:grid-cols-2">
          <div>
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
              {/* <p className="mt-10">
                <Button
                  variant="contained"
                  href="#contained-buttons"
                  className="bg-black"
                >
                  View Resume
                </Button>
              </p> */}
            </div>
          </div>
          
          <div>
            <div className="lg:text-left ml-14 mt-20  top-96  absolute lg:top-40 text-white m-auto lg:ml-60  ">
              <div class="relative duration-300  hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_60deg)] group border border-sky-900  overflow-hidden rounded-2xl  h-52 w-72 bg-sky-800 p-5 flex flex-col items-start gap-4">
                <div class="text-gray-50">
                  <span class="font-bold text-5xl">Vikas</span>
                  <p class="text-xs">Frontend Developer</p>
                </div>
                <button class="duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3">
                <Link to={pageUrl} target="_blank" download>
                    <Document>
                      Dowload Resume
                      <Page pageNumber={1} />
                    </Document>
                  </Link>

                  <svg
                    y="0"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    width="100"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                    height="100"
                    class="w-6 h-6 fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z"
                    ></path>
                  </svg>
                </button>

                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  class="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-900"
                >
                  <path
                    stroke-width="5"
                    stroke-miterlimit="10"
                    d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                    data-name="layer1"
                  ></path>
                </svg>

                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  class="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-700"
                >
                  <path
                    stroke-width="2"
                    stroke-miterlimit="10"
                    d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                    data-name="layer1"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
}

export default Navbar;
