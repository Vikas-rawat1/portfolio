import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex lg:justify-between lg:items-center bg-black text-white px-6 py-4">
        <div>
          <ul>
            <li className="font-saira-stencil font-bold text-2xl">
              <img src="Images/head.gif" alt="Logo" className="h-16" />
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex font-poppins font-bold gap-8">
              <Link to="/">Home</Link>
              <Link >About</Link>
              <Link to="/projecttab">Projects</Link>
          </ul>
        </div>

        <div>
          <ul className="flex font-poppins font-bold mr-10">
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden bg-black text-white">
        <div className="flex items-center justify-between px-6 py-4 font-saira-stencil font-bold text-2xl">
          <img src="Images/head.gif" alt="Logo" className="h-14" />
          <RiMenu3Line size={36} className="text-white" onClick={toggleMenu} />
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <div className="relative bg-black text-white flex flex-col px-6 py-4">
            <ul className="flex  justify-center h-20  font-poppins font-bold gap-4">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/projecttab" onClick={toggleMenu}>
                Projects
              </Link>
            </ul>
          </div>
        )}

        {/* {toggle && (
          <div className="bg-black text-white flex flex-col px-6 py-4">
            <ul className="flex flex-col font-poppins font-bold gap-4">
              <li>
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li>
                <Link to="/projecttab" onClick={toggleMenu}>Projects</Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        )} */}
      </div>
    </>
  );
}

export default Navbar;
