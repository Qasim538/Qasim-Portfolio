
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const banners = [
    {
      title: "Economist Billboard",
      publisher: "The Economist",
      size: "970x250",
      path: `${process.env.PUBLIC_URL}/banners/Sompo/SOMPO_Economist_Billboard_970x250/index.html`,
      width: 970,
      height: 250,
    },
    {
      title: "Economist DMPU",
      publisher: "The Economist",
      size: "300x600",
      path: `${process.env.PUBLIC_URL}/banners/Sompo/SOMPO_Economist_DMPU_300x600_CityZoom/index.html`,
      width: 300,
      height: 600,
    },
    {
      title: "Economist MPU — City Zoom",
      publisher: "The Economist",
      size: "300x250",
      path: `${process.env.PUBLIC_URL}/banners/Sompo/SOMPO_Economist_MPU_300x250_CityZoom/index.html`,
      width: 300,
      height: 250,
    },
    {
      title: "Economist MPU — Traffic",
      publisher: "The Economist",
      size: "300x250",
      path: `${process.env.PUBLIC_URL}/banners/Sompo/SOMPO_Economist_MPU_300x250_Traffic/index.html`,
      width: 300,
      height: 250,
    },
  ];

export default function SompoBanners() {
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
              Sompo International HTML5 Banner Campaign
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
              Multi-format HTML5 display campaign produced for Bloomberg and
              The Economist, combining animation, technical production,
              optimisation and publisher-specific QA.
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

              <span className="bg-white/10 px-4 py-2 rounded-full">
                Digital Production
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
              The Sompo campaign required the production of a suite of HTML5
              display advertising assets for Bloomberg and The Economist.
              The project involved adapting approved creative across multiple
              advertising formats while meeting publisher-specific technical
              specifications, animation limits and file-size requirements.
            </p>
          </div>
        </section>

        {/* INFO */}
        <section className="bg-gray-50 py-16 px-6 md:px-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-2">Role</h3>
              <p className="text-slate-600">
                HTML5 Developer / Digital Production Artworker
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">Tools</h3>
              <p className="text-slate-600">
                HTML5, CSS3, JavaScript, GSAP, Adobe Animate
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">Publishers</h3>
              <p className="text-slate-600">
                Bloomberg & The Economist
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
                <h3 className="font-bold mb-3">Publisher Specifications</h3>
                <p className="text-slate-600">
                  Each publisher required assets to comply with its own
                  technical and advertising specifications.
                </p>
              </div>

              <div className="bg-white shadow rounded-xl p-8">
                <h3 className="font-bold mb-3">File Optimisation</h3>
                <p className="text-slate-600">
                  Animation, imagery and code were optimised while maintaining
                  visual quality and smooth performance.
                </p>
              </div>

              <div className="bg-white shadow rounded-xl p-8">
                <h3 className="font-bold mb-3">Multiple Formats</h3>
                <p className="text-slate-600">
                  Creative needed to remain consistent across MPU, half-page,
                  billboard and publisher-specific placements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#122254] text-white py-20 px-6 md:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black mb-10">
              Production & QA Process
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-red-400 text-2xl font-bold mb-3">
                  Build
                </h3>
                <p className="text-gray-300">
                  Developed and adapted HTML5 creative across the required
                  Bloomberg and Economist advertising formats.
                </p>
              </div>

              <div>
                <h3 className="text-red-400 text-2xl font-bold mb-3">
                  Optimise
                </h3>
                <p className="text-gray-300">
                  Optimised imagery, animation and assets to meet strict
                  publisher file-size and performance requirements.
                </p>
              </div>

              <div>
                <h3 className="text-red-400 text-2xl font-bold mb-3">
                  QA & Delivery
                </h3>
                <p className="text-gray-300">
                  Checked clickTag implementation, ad dimensions, animation
                  duration, borders, backup assets and final package structure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="py-20 px-6 md:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black mb-10">
              Campaign Delivery
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-4xl font-bold text-red-500">11</h3>
                <p className="mt-3">Digital Assets</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-4xl font-bold text-red-500">2</h3>
                <p className="mt-3">Publishers</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-4xl font-bold text-red-500">✓</h3>
                <p className="mt-3">Publisher QA</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-4xl font-bold text-red-500">✓</h3>
                <p className="mt-3">Final Delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* BANNER SECTION GOES HERE */}

        <div className="text-center py-14">
          <Link
            to="/"
            className="inline-flex px-6 py-3 bg-[#122254] text-white rounded-full hover:bg-[#1b2f66] transition"
          >
            ← Back to Portfolio
          </Link>
        </div>

      </div>
    </>
  );
}