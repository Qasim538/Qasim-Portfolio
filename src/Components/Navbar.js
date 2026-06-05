import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const handleClick = () => setNav(!nav);

  const openPDF = (e) => {
    e.preventDefault();

    const pdfUrl = `${process.env.PUBLIC_URL}/Qasim_Portfolio.pdf`;

    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  const goToSection = (section) => {
    const scrollTo = () => {
      const el = document.getElementById(section);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (!isHome) {
      navigate("/");

      requestAnimationFrame(() => {
        setTimeout(scrollTo, 100);
      });
    } else {
      scrollTo();
    }

    setNav(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed w-full h-[80px] flex justify-between items-center px-5 md:px-20 bg-white/40 backdrop-blur text-[#071325] z-50">
        {/* LOGO */}
        <RouterLink
          to="/"
          onClick={() => setNav(false)}
          className="text-3xl font-black text-[#122254]"
        >
          Qasim<span className="text-red-500">.</span>
        </RouterLink>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-lg items-center">
          <li>
            <RouterLink to="/" className="hover:text-red-500">
              Home
            </RouterLink>
          </li>

          <li>
            <button
              onClick={() => goToSection("skills")}
              className="hover:text-red-500"
            >
              Skills
            </button>
          </li>

          <li>
            <button
              onClick={() => goToSection("work")}
              className="hover:text-red-500"
            >
              Work
            </button>
          </li>

          <li>
            <button
              onClick={() => goToSection("contact")}
              className="hover:text-red-500"
            >
              Contact
            </button>
          </li>

          <li>
            <button
              onClick={openPDF}
              className="bg-red-500 px-4 py-1.5 rounded text-sm text-white hover:bg-red-600"
            >
              CV & Print Portfolio
            </button>
          </li>
        </ul>

        {/* MOBILE RIGHT */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="https://www.linkedin.com/in/qasim835"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://github.com/Qasim538"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={22} />
          </a>

          <a href="mailto:mq12113@gmail.com">
            <HiOutlineMail size={22} />
          </a>

          <div onClick={handleClick} className="cursor-pointer z-50">
            {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center z-40"
          }
        >
          <ul className="text-center">
            <li className="py-5 text-3xl font-semibold text-[#122254]">
              <RouterLink to="/" onClick={handleClick}>
                Home
              </RouterLink>
            </li>

            <li className="py-5 text-3xl font-semibold text-[#122254]">
              <button onClick={() => goToSection("skills")}>Skills</button>
            </li>

            <li className="py-5 text-3xl font-semibold text-[#122254]">
              <button onClick={() => goToSection("work")}>Work</button>
            </li>

            <li className="py-5 text-3xl font-semibold text-[#122254]">
              <button onClick={() => goToSection("contact")}>Contact</button>
            </li>
          </ul>
        </div>

        {/* SOCIAL SIDEBAR */}
          
            {/* Social Icons (Desktop only - sidebar) */}
        <div className="hidden lg:flex fixed flex-col top-[250%] left-0 z-[60]">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between mb-1 items-center rounded-lg ml-[-100px] hover:ml-[-10px] duration-300 bg-red-100 ">
              <a
                className="flex justify-between items-center w-full text-red-600"
                href="https://www.linkedin.com/in/qasim835"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center mb-1  rounded-lg  ml-[-100px] hover:ml-[-10px] duration-300 bg-red-100 ">
              <a
                className="flex justify-between items-center w-full text-red-600"
                href="https://github.com/Qasim538"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <FaGithub size={30} />
              </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center  rounded-lg  ml-[-100px] hover:ml-[-10px] duration-300 bg-red-100 ">
              <a
                className="flex justify-between items-center w-full text-red-600"
                href="mailto:mq12113@gmail.com"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
          


      {/* FLOATING CV BUTTON */}
      {!nav && (
        <div className="fixed right-0 top-[40%] z-[999]">
          <button
            onClick={openPDF}
            className="hidden md:block bg-red-700 text-white px-4 py-2 rounded-l-lg transform rotate-90 origin-bottom-right hover:bg-red-600 transition"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
            }}
          >
            CV & Print Portfolio
          </button>

          <button
            onClick={openPDF}
            className="md:hidden fixed bottom-20 right-3 bg-red-700 text-white px-3 py-2 rounded-lg shadow-lg text-sm"
          >
            CV & Portfolio
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
