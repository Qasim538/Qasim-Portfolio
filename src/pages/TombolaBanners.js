import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

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

  const getScale = (b) => {
    if (b.size === "970x250") return 0.28;
    if (b.size === "300x600") return 0.65;
    return 0.9;
  };

  return (
    <>
      <Navbar />

      <div className="w-full bg-white text-[#122254]">

        {/* HERO */}
        <section className="w-full min-h-[70vh] flex items-center bg-[#122254] text-white px-6 md:px-20">
          <div className="max-w-5xl">
            <p className="uppercase tracking-widest text-red-400 mb-4">
              Case Study
            </p>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Tombola HTML5 Banner Campaign
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
              Six HTML5 display banner executions built with JavaScript and
              GSAP animations across multiple advertising formats.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="bg-white/10 px-4 py-2 rounded-full">
                HTML5 Advertising
              </span>

              <span className="bg-white/10 px-4 py-2 rounded-full">
                JavaScript
              </span>

              <span className="bg-white/10 px-4 py-2 rounded-full">
                GSAP
              </span>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="py-20 px-6 md:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black mb-8">
              Project Overview
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              This campaign involved building multiple HTML5 banner
              advertisements for Tombola. Each execution was developed
              using JavaScript and GSAP animation while meeting strict
              advertising platform specifications and performance
              requirements.
            </p>
          </div>
        </section>

        {/* INFO */}
        <section className="bg-gray-50 py-16 px-6 md:px-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="font-bold text-xl mb-2">Role</h3>
              <p className="text-slate-600">
                Front-End Developer
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">Tools</h3>
              <p className="text-slate-600">
                HTML5, CSS3, JavaScript, GSAP
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">Deliverables</h3>
              <p className="text-slate-600">
                6 Banner Executions
              </p>
            </div>

          </div>

        </section>

                {/* CHALLENGE */}
                <section className="py-20 px-6 md:px-20">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-4xl font-black mb-8">
              The Challenge
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white shadow rounded-xl p-8">
                <h3 className="font-bold mb-3">
                  Multiple Ad Sizes
                </h3>

                <p className="text-slate-600">
                  Maintain visual consistency across several banner formats.
                </p>
              </div>

              <div className="bg-white shadow rounded-xl p-8">
                <h3 className="font-bold mb-3">
                  Performance
                </h3>

                <p className="text-slate-600">
                  Deliver smooth animation while keeping file sizes optimised.
                </p>
              </div>

              <div className="bg-white shadow rounded-xl p-8">
                <h3 className="font-bold mb-3">
                  Engagement
                </h3>

                <p className="text-slate-600">
                  Use animation and motion to attract user attention.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#122254] text-white py-20 px-6 md:px-20">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-4xl font-black mb-10">
              Development Process
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div>
                <h3 className="text-red-400 text-2xl font-bold mb-3">
                  Planning
                </h3>

                <p className="text-gray-300">
                  Prepared creative layouts for all required ad sizes.
                </p>
              </div>

              <div>
                <h3 className="text-red-400 text-2xl font-bold mb-3">
                  Development
                </h3>

                <p className="text-gray-300">
                  Built interactive banners using HTML5, CSS and GSAP.
                </p>
              </div>

              <div>
                <h3 className="text-red-400 text-2xl font-bold mb-3">
                  Testing
                </h3>

                <p className="text-gray-300">
                  Verified animation timing, responsiveness and browser support.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* RESULTS */}
        <section className="py-20 px-6 md:px-20">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-4xl font-black mb-10">
              Results
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-4xl font-bold text-red-500">✓</h3>
                <p className="mt-3">6 Executions</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-4xl font-bold text-red-500">✓</h3>
                <p className="mt-3">GSAP Powered</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-4xl font-bold text-red-500">✓</h3>
                <p className="mt-3">Cross-Browser</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-4xl font-bold text-red-500">✓</h3>
                <p className="mt-3">Production Ready</p>
              </div>

            </div>

          </div>
        </section>

        {/* BANNERS */}
        <section className="bg-[#f5f7fb] py-20 px-6 md:px-20">
          <div className="max-w-[1600px] mx-auto">

            <h2 className="text-4xl font-black mb-8">
              Banner Executions
            </h2>

            <div className="flex flex-wrap gap-2 mb-10">
              {["all", "300x250", "300x600", "970x250"].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-xl text-sm border transition ${
                    activeFilter === f
                      ? "bg-[#122254] text-white border-[#122254]"
                      : "bg-white border-slate-200"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">

{filtered.map((banner, index) => (
  <div
    key={index}
    className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-lg transition"
  >
    <div className="flex justify-center items-center bg-slate-50 rounded-lg p-4 overflow-hidden min-h-[350px]">

      <div
        style={{
          transform: `scale(${getScale(banner)})`,
          transformOrigin: "center",
        }}
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

    <div className="text-center mt-4">
      <p className="font-semibold text-[#122254]">
        {banner.title}
      </p>

      <p className="text-sm text-slate-500">
        {banner.size}
      </p>
    </div>
  </div>
))}

</div>

<div className="text-center mt-14">
<Link
  to="/"
  className="inline-flex px-6 py-3 bg-[#122254] text-white rounded-full hover:bg-[#1b2f66] transition"
>
  ← Back to Portfolio
</Link>
</div>

</div>
</section>

</div>
</>
);
}