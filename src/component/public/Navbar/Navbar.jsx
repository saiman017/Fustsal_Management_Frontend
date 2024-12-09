import "boxicons";
import FaugetImage from "../../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/ground", label: "Ground" },
    { to: "/aboutUs", label: "About us" },
    { to: "/contactUs", label: "Contact" },
  ];
  return (
    <>
      <header className="navbar top-0 relative w-full sm:text-base px-4 sm:px-8 md:px-16 lg:px-20 py-4 flex justify-between items-center bg-white shadow text-base lg:text-lg font-medium">
        <div className="logo  ">
          <Link to={"/"}>
            <img
              className="w-32 h-16 cursor-pointer "
              src={FaugetImage}
              alt="no Image"
            />
          </Link>
        </div>
        <div className="options hidden mds:flex ">
          <ul className="flex space-x-12 ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="login-search  items-center space-x-4 hidden mds:flex">
          <i className="bx bx-search-alt-2 text-3xl cursor-pointer"></i>

          <Link
            to={"/login"}
            className="login px-7 py-2 bg-[#000] rounded-full text-[#fdfdfd] cursor-pointer"
          >
            Login
          </Link>
        </div>
        <div className="mds:hidden block  z-20 cursor-point er ">
          <i
            className={`bx bx-menu text-4xl ${
              isMenuOpen ? "text-white" : "text-black"
            } `}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></i>
        </div>
        <div
          className={`fixed xl:hidden top-0 h-full w-3/4 lg:w-2/4 bg-black flex flex-col justify-start items-center gap-6 text-white z-10 text-base mds:opacity-0 
    ${isMenuOpen ? "right-0 opacity-100" : "-right-72 opacity-0"}
  `}
          style={{ transition: "right 0.5s ease, opacity 0.3s ease" }}
        >
          <ul className="mt-[45%] w-full">
            {navLinks.map((item) => (
              <li
                className="list-none text-center  py-4 cursor-pointer"
                key={item.label}
              >
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <button className=" mt-[25%] login px-8 py-3 bg-[#054646] rounded-full  text-[#fdfdfd] cursor-pointer">
            <Link to={"/login"}>Login</Link>
          </button>
          <button className=" mt-1 signUp px-8 py-3 bg-[#082e44] rounded-full  text-[#fdfdfd] cursor-pointer">
            <Link to={"/signUp"}>Sign Up</Link>
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
