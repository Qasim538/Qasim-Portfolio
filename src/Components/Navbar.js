import React, { useState } from "react";
import logo from "../Assets/Q-Logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const openPDF = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // ✅ Works both locally and on GitHub Pages
    const pdfUrl = `${process.env.PUBLIC_URL}/Qasim_Portfolio.pdf`;
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-8 md:px-20 bg-[#071325] text-gray-300 z-50">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-lg items-center">
        <li className="flex items-center">
          <Link className="hover:text-red-500" to="home" smooth offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="hover:text-red-500" to="skills" smooth offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="hover:text-red-500" to="work" smooth offset={50} duration={500}>
            Work
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="hover:text-red-500" to="contact" smooth offset={50} duration={500}>
            Contact
          </Link>
        </li>
        <li className="flex items-center">
          <button
            type="button"
            onClick={openPDF}
            className="hover:text-white cursor-pointer bg-red-700 px-4 py-1.5 rounded text-sm">
            CV & Print Portfolio
          </button>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <ul className="text-center">
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} className="hover:text-red-500" to="home" smooth offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} className="hover:text-red-500" to="skills" smooth offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} className="hover:text-red-500" to="work" smooth offset={50} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} className="hover:text-red-500" to="contact" smooth offset={50} duration={500}>
              Contact
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <button
              type="button"
              onClick={(e) => {
                openPDF(e);
                setNav(false);
              }}
              className="hover:text-red-500 cursor-pointer"
            >
              CV & Print Portfolio
            </button>
          </li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/qasim835"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Qasim538"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:mq12113@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
