import React, { useEffect } from "react";
import gsap from "gsap";

import proj1 from "../Assets/projects/Proj1.png";
import proj2 from "../Assets/projects/Proj2.png";
import proj3 from "../Assets/projects/Proj3.png";
import proj4 from "../Assets/projects/Proj4.png";
import proj7 from "../Assets/projects/Proj7.jpg";
import proj8 from "../Assets/projects/Proj8.jpg";
import proj9 from "../Assets/projects/Proj9.jpg";
import proj10 from "../Assets/projects/Proj10.png";
import proj11 from "../Assets/projects/Proj11.jpg";
import proj12 from "../Assets/projects/Proj12.jpg";

// Icons
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import javascript from "../Assets/javascript.png";
import reactImg from "../Assets/react.png";
import Figma from "../Assets/Figma.png";
import Photoshop from "../Assets/Photoshop.png";

// Tech map
const techIcons = {
  HTML: html,
  CSS: css,
  JavaScript: javascript,
  React: reactImg,
  Figma: Figma,
  Photoshop: Photoshop,
};

const projects = [
  {
    img: proj12,
    title: "Google Pixel 10 Launch",
    desc: "Figma → Photoshop → HTML email build.",
    link: "https://store.google.com/gb/product/pixel_10_pro?hl=en-GB&pli=1",
    software: ["Figma", "Photoshop", "HTML", "CSS"],
    large: true,
  },
  {
    img: proj11,
    title: "Cisco Email Design",
    desc: "Figma → HTML email build.",
    link: "https://www.webex.com/",
    software: ["Figma", "HTML", "CSS"],
  },
  {
    img: proj9,
    title: "Marketing Email",
    desc: "Vauxhall campaign.",
    link: "https://www.vauxhall.co.uk/",
    software: ["Figma", "HTML", "CSS"],
    tall: true,
  },
  {
    img: proj7,
    title: "Afreximbank",
    desc: "Website updates & interactivity.",
    link: "https://www.afreximbank.com/",
    software: ["HTML", "CSS", "JavaScript"],
  },
  {
    img: proj10,
    title: "Landing Page",
    desc: "Event landing page.",
    link: "https://www.afreximbank.com/",
    software: ["Figma", "HTML", "CSS"],
    wide: true,
  },
  {
    img: proj8,
    title: "Email Design",
    desc: "Responsive email template.",
    link: "https://www.afreximbank.com/",
    software: ["Figma", "HTML", "CSS"],
  },
  {
    img: proj1,
    title: "React App",
    desc: "",
    link: "https://harmonious-fox-7491f1.netlify.app/",
    software: ["React", "CSS"],
  },
];

const Work = () => {
  useEffect(() => {
    gsap.fromTo(
      ".workFade",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      }
    );

    gsap.to(".float1", {
      y: -12,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".float2", {
      y: -18,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".float3", {
      y: -10,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      name="work"
      className="w-full min-h-screen bg-[#f5f7fb] py-24 text-[#233554] relative overflow-hidden"
    >
      {/* background blur */}
      <div className="absolute top-[10%] left-[-120px] w-[320px] h-[320px] bg-blue-200/30 blur-[120px] rounded-full"></div>

      <div className="max-w-[1300px] mx-auto px-6 flex flex-col justify-center w-full h-full relative z-10">
        {/* Heading */}
        <div className="pb-16 text-center workFade">
          <p className="text-5xl font-black inline border-b-4 text-[#122254] border-red-500 pb-2">
            Work
          </p>

          <p className="py-6 text-lg text-[#5c6574]">
            Check out some of my recent works.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[260px] gap-7 w-full">
          {projects.map((item, index) => (
            <div
              key={index}
              className={`
                workFade
                ${index % 3 === 0 ? "float1" : ""}
                ${index % 3 === 1 ? "float2" : ""}
                ${index % 3 === 2 ? "float3" : ""}
                
                group
                relative
                overflow-hidden
                rounded-[30px]
                shadow-xl
                bg-white
                
                hover:-translate-y-2
                transition
                duration-500

                ${item.large ? "lg:col-span-2 lg:row-span-2" : ""}
                ${item.wide ? "lg:col-span-2" : ""}
                ${item.tall ? "lg:row-span-2" : ""}
              `}
            >
              {/* image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-700"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#122254]/95 via-[#122254]/40 to-transparent"></div>
              </div>

              {/* content */}
              <div className="relative z-10 flex flex-col h-full justify-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {item.title}
                  </h3>

                  {item.desc && (
                    <p className="text-gray-200 text-sm leading-7 mb-5">
                      {item.desc}
                    </p>
                  )}

                  {/* icons */}
                  <div className="flex gap-3 mb-6 flex-wrap">
                    {item.software.map(
                      (tech, i) =>
                        techIcons[tech] && (
                          <div
                            key={i}
                            className="w-[36px] h-[36px] rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center"
                          >
                            <img
                              src={techIcons[tech]}
                              alt={tech}
                              className="w-5 h-5 object-contain"
                            />
                          </div>
                        )
                    )}
                  </div>
                </div>

                {/* button */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center py-3 rounded-2xl bg-white text-[#122254] font-semibold hover:bg-red-500 hover:text-white transition duration-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
