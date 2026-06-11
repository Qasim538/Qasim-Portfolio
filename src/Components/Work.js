import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import proj7 from "../Assets/projects/Proj7.jpg";
import proj8 from "../Assets/projects/Proj8.jpg";
import proj9 from "../Assets/projects/Proj9.jpg";
import proj10 from "../Assets/projects/Proj10.png";
import proj11 from "../Assets/projects/Proj11.jpg";
import proj12 from "../Assets/projects/Proj12.jpg";
import tombolaThumb from "../Assets/projects/Tombola.jpg";

import html from "../Assets/html.png";
import css from "../Assets/css.png";
import javascript from "../Assets/javascript.png";
import reactImg from "../Assets/react.png";
import Figma from "../Assets/Figma.png";
import Photoshop from "../Assets/Photoshop.png";

const techIcons = {
  HTML: html,
  CSS: css,
  JavaScript: javascript,
  React: reactImg,
  Figma,
  Photoshop,
};
const projects = [
  {
    img: proj12,
    title: "Google Pixel 10 Launch",
    category: "Email Campaign",
    desc: "Designed in Figma, refined in Photoshop and developed into a responsive HTML email.",
    link: "/google-pixel",
    software: ["Figma", "Photoshop", "HTML", "CSS"],
    featured: true,
    large: true,
  },

  {
    img: proj7,
    title: "Afreximbank Digital Experience",
    category: "Enterprise Web Development",
    desc: "Design, development and maintenance of responsive web pages supporting one of Africa's leading trade finance institutions.",
    link: "/afreximbank",
    software: ["HTML", "CSS", "JavaScript", "React"],
    featured: true,
    tall: true,
  },

  {
    img: proj8,
    title: "Afreximbank Email Campaign",
    category: "Responsive Email",
    desc: "Responsive email campaigns designed and developed to support Afreximbank marketing communications.",
    link: "/afreximbank",
    software: ["Figma", "HTML", "CSS"],
    tall: true,
  },

  {
    img: tombolaThumb,
    title: "Tombola HTML5 Banner Campaign",
    category: "Display Advertising",
    desc: "Six HTML5 banner executions built with JavaScript and GSAP animations.",
    link: "/tombola-banners",
    software: ["HTML", "CSS", "JavaScript"],
    featured: true,
    wide: true,
  },

  {
    img: proj10,
    title: "Afreximbank Event Landing Page",
    category: "Landing Page",
    desc: "Responsive landing page designed and developed for Afreximbank campaigns and events.",
    link: "/afreximbank",
    software: ["Figma", "HTML", "CSS"],
    wide: true,
  },

  {
    img: proj11,
    title: "Cisco Email Design",
    category: "Email Development",
    desc: "Responsive email campaign designed and developed for multiple devices.",
    link: "/cisco-email",
    software: ["Figma", "HTML", "CSS"],
    tall: true,
  },

  {
    img: proj9,
    title: "Vauxhall Marketing Email",
    category: "Email Campaign",
    desc: "Marketing email design focused on engagement and conversions.",
    link: "/vauxhall-campaign",
    software: ["Figma", "HTML", "CSS"],
    tall: true,
  },
];

const Work = () => {
  useEffect(() => {
    gsap.fromTo(
      ".workFade",
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section
      id="work"
      className="bg-[#f5f7fb] py-20 text-[#233554] relative overflow-hidden"
    >
      {" "}
      <div className="absolute top-[10%] left-[-120px] w-[300px] h-[300px] bg-blue-200/20 blur-[120px] rounded-full"></div>
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="pb-10 workFade">
          <p className="text-4xl font-black inline-block border-b-4 border-red-500 text-[#122254] pb-2">
            Work
          </p>

          <p className="mt-5 text-lg text-[#5c6574] max-w-2xl">
            Selected projects spanning email development, front-end engineering,
            HTML5 advertising and digital design.
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Featured client and personal projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((item, index) => (
    <div
      key={index}
      className={`
        workFade
        group
        relative
        bg-white
        rounded-2xl
        overflow-hidden
        border border-slate-200
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all duration-300
        flex flex-col

        before:absolute
        before:inset-0
        before:bg-gradient-to-r
        before:from-transparent
        before:via-white/20
        before:to-transparent
        before:-translate-x-full
        hover:before:translate-x-full
        before:transition-transform
        before:duration-1000
        before:pointer-events-none

        ${item.large ? "lg:col-span-2" : ""}
        ${item.wide ? "lg:col-span-2" : ""}
      `}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden h-[220px]">
        <img
          src={item.img}
          alt={item.title}
          className="
            w-full
            h-full
            object-cover
            object-top
            transition-all
            duration-700
            group-hover:scale-110
            group-hover:-translate-y-2
          "
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#122254]/20
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition duration-500
          "
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-6">
        {item.featured && (
          <span className="mb-4 self-start bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </span>
        )}

        <p className="text-xs uppercase tracking-[2px] text-slate-400 mb-2">
          {item.category}
        </p>

        <h3 className="text-2xl font-black text-[#122254] mb-3 leading-tight transition duration-300 group-hover:text-red-600">
          {item.title}
        </h3>

        <p className="text-[#5c6574] text-sm leading-relaxed mb-6">
          {item.desc}
        </p>

        {/* TECH ICONS */}
        <div className="flex gap-2 flex-wrap mb-6">
          {item.software.map((tech, i) =>
            techIcons[tech] ? (
              <div
                key={i}
                className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center"
              >
                <img
                  src={techIcons[tech]}
                  alt={tech}
                  className="w-5 h-5 object-contain"
                />
              </div>
            ) : null
          )}
        </div>

        {/* BUTTON */}
        <div className="mt-auto">
          <Link
            to={item.link}
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              border-2
              border-[#122254]
              text-[#122254]
              text-sm
              font-medium
              transition-all
              duration-300
              hover:bg-[#122254]
              hover:text-white
              hover:translate-x-1
            "
          >
            View Case Study →
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>
</div>


    </section>
  );
};

export default Work;
