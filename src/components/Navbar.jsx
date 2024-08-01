import { RiHammerLine, RiLineFill, RiMenu3Line } from "react-icons/ri";
import "../App.css";
import { Link } from "react-router-dom";
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
            {/* <Link to="About">About</Link> */}
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
      <div className="bg-black text-white">
        <div className="lg:hidden px-6 justify-between flex items-center font-saira-stencil font-bold text-2xl">
          <img src="Images/head.gif" alt="Gif" className="h-14" />
          <RiMenu3Line size={36} className="text-white"/>

          {/* <div className="text-white">
            <ul className="flex font-poppins font-bold gap-8">
              <Link to="/">Home</Link>
              <Link to="/projecttab">Projects</Link>
            </ul>
          </div> */}
        </div>
      </div>

      {/* <About /> */}
    </>
  );
}

export default Navbar;
