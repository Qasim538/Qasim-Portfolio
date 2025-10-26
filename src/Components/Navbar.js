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
    const pdfUrl = `${process.env.PUBLIC_URL}/Qasim_Portfolio.pdf`;
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed w-full h-[80px] flex justify-between items-center px-5 md:px-20 bg-[#071325] text-gray-300 z-50">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" style={{ width: "50px" }} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg items-center">
          <li>
            <Link
              className="hover:text-red-500"
              to="home"
              smooth
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-500"
              to="skills"
              smooth
              offset={50}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-500"
              to="work"
              smooth
              offset={50}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-500"
              to="contact"
              smooth
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={openPDF}
              className="hover:text-white cursor-pointer bg-red-700 px-4 py-1.5 rounded text-sm"
            >
              CV & Print Portfolio
            </button>
          </li>
        </ul>

        {/* --- MOBILE RIGHT SIDE: Socials + Hamburger --- */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Social Icons (Mobile) */}
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/qasim835"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-400 transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/Qasim538"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-gray-100 transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="mailto:mq12113@gmail.com"
              className="text-[#6fc2b0] hover:text-teal-300 transition"
            >
              <HiOutlineMail size={22} />
            </a>
          </div>

          {/* Hamburger Icon */}
          <div onClick={handleClick} className="z-50 cursor-pointer">
            {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-40"
          }
        >
          <ul className="text-center">
            <li className="py-6 text-4xl">
              <Link onClick={handleClick} to="home" smooth offset={50} duration={500}>
                Home
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link onClick={handleClick} to="skills" smooth offset={50} duration={500}>
                Skills
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link onClick={handleClick} to="work" smooth offset={50} duration={500}>
                Work
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link onClick={handleClick} to="contact" smooth offset={50} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons (Desktop only - sidebar) */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-[60]">
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

      {/* --- Floating CV Button (always visible, hidden when menu open) --- */}
      {!nav && (
        <div className="fixed right-0 top-[40%] z-[999]">
          {/* Desktop version */}
          <button
            onClick={openPDF}
            className="hidden md:block bg-red-700 text-white px-4 py-2 rounded-l-lg transform rotate-90 origin-bottom-right hover:bg-red-600 transition duration-300 shadow-lg"
            style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
          >
            CV & Print Portfolio
          </button>

          {/* Mobile version */}
          <button
            onClick={openPDF}
            className="md:hidden fixed bottom-20 right-3 bg-red-700 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 text-sm z-[999]"
          >
            CV & Portfolio
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
