// import Typewriter from "typewriter-effect";
// import Button from "@mui/material/Button";
// import Stack from '@mui/material/Stack';
import "../App.css";
// import About from "./About";
// import Menu from "../components/Menu";
import { Link } from "react-router-dom";
// import { Document, Page } from "react-pdf";
// import { Document, Page } from "@react-pdf/renderer";
function Navbar() {
  // const pageUrl = "Images/vikasresume.pdf";
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
            <Link to="/">Home</Link>
            <Link to="About">About</Link>
            <Link to="/projecttab">Projects</Link>
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

      {/* <About /> */}
    </>
  );
}

export default Navbar;
