import React, { useState } from "react";
import { Link } from "react-router-dom";

const banners = [
  {
    title: "Execution 1",
    size: "300x250",
    path: `${process.env.PUBLIC_URL}/banners/tombola/300x250/300x250.html`,
    width: 300,
    height: 250,
  },
  {
    title: "Execution 2",
    size: "300x250",
    path: `${process.env.PUBLIC_URL}/banners/tombola/300x250/300x250 2.html`,
    width: 300,
    height: 250,
  },
  {
    title: "Execution 1",
    size: "300x600",
    path: `${process.env.PUBLIC_URL}/banners/tombola/300x600/300x600.html`,
    width: 300,
    height: 600,
  },
  {
    title: "Execution 2",
    size: "300x600",
    path: `${process.env.PUBLIC_URL}/banners/tombola/300x600/300x600 2.html`,
    width: 300,
    height: 600,
  },
  {
    title: "Execution 1",
    size: "970x250",
    path: `${process.env.PUBLIC_URL}/banners/tombola/970x250/970x250.html`,
    width: 970,
    height: 250,
  },
  {
    title: "Execution 2",
    size: "970x250",
    path: `${process.env.PUBLIC_URL}/banners/tombola/970x250/970x250 2.html`,
    width: 970,
    height: 250,
  },
];

export default function TombolaBanners() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? banners
      : banners.filter((b) => b.size === activeFilter);

  // simple stable scaling (no window resize bugs)
  const getScale = (b) => {
    if (b.size === "970x250") return 0.35;
    if (b.size === "300x600") return 0.85;
    return 1;
  };

  return (
    <section className="bg-[#f5f7fb] text-[#233554] py-20 relative overflow-hidden">
      {/* glow */}
      <div className="absolute bottom-[-120px] left-[-120px] w-[300px] h-[300px] bg-blue-200/20 blur-[120px] rounded-full"></div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="skillsFade mb-10">
          <p className="text-4xl font-black inline-block border-b-4 border-red-500 text-[#122254] pb-2">
            Banners
          </p>

          <p className="mt-5 text-[#5c6574] text-lg">
            HTML5 display advertising campaigns built with GSAP and JavaScript.
          </p>
        </div>

        {/* FILTER */}
        <div className="skillsFade flex flex-wrap gap-2 mb-10">
          {["all", "300x250", "300x600", "970x250"].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`
                px-4 py-2 rounded-xl text-sm border transition
                ${
                  activeFilter === f
                    ? "bg-[#122254] text-white border-[#122254]"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }
              `}
            >
              {f}
            </button>
          ))}
        </div>

        {/* SINGLE COLUMN GRID */}
        <div className="grid grid-cols-1 gap-6">

          {filtered.map((banner, index) => (
            <div
              key={index}
              className="skillsFade bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >

              {/* preview */}
              <div className="flex items-center justify-center bg-slate-50 rounded-lg p-4 overflow-hidden">

                <div
                  style={{
                    transform: `scale(${getScale(banner)})`,
                    transformOrigin: "center",
                  }}
                  className="flex items-center justify-center"
                >
                  <iframe
                    src={banner.path}
                    title={banner.title}
                    width={banner.width}
                    height={banner.height}
                    scrolling="no"
                    className="border-0"
                  />
                </div>

              </div>

              {/* text */}
              <div className="mt-3 text-center">
                <p className="text-sm font-semibold text-[#122254]">
                  {banner.title}
                </p>

                <p className="text-xs text-slate-500">
                  {banner.size}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="skillsFade text-center mt-14">
          <Link
            to="/"
            className="inline-flex px-6 py-3 bg-[#122254] text-white rounded-full hover:bg-[#1b2f66] transition"
          >
            ← Back to Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}