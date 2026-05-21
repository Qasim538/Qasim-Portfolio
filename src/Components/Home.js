import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaCode, FaPenFancy, FaPrint } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";

const Home = () => {

  useEffect(() => {

    // entrance animation only once
    gsap.fromTo(
      ".heroFade",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      }
    );
  
    // independent floating cards
    gsap.to(".card1", {
      y: -18,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  
    gsap.to(".card2", {
      y: -18,
      x: 8,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  
    gsap.to(".card3", {
      y: -20,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  
  }, []);

  return (
    <div
      name="home"
      className="w-full min-h-screen bg-[#f5f7fb] text-[#233554] py-20 relative overflow-hidden"
    >

      {/* background blur */}
      <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-red-200/30 blur-[120px] rounded-full"></div>

      {/* Container */}
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col justify-center relative z-10">

        <p className="heroFade text-red-500 mt-10 tracking-[3px] uppercase text-sm font-semibold">
          Hi, I am
        </p>

        <h1 className="heroFade text-4xl sm:text-7xl font-black text-[#122254] mt-3 leading-tight">
          Qasim Muhammad
        </h1>

        <small className="heroFade sm:text-2xl text-[#3c4b6e] mt-4 tracking-wide leading-9">
          Web Developer <span className="text-red-500">|</span> Designer{" "}
          <span className="text-red-500">|</span> Creative Artworker
        </small>

        <p className="heroFade text-[#5c6574] py-6 max-w-[950px] leading-9 text-[16px]">
          I’m a <strong>Frontend Developer</strong> and{" "}
          <strong>UI/UX Designer </strong>
          with over 17 years of experience in the creative and design industry.
          Having worked as a <strong>creative artworker</strong> and designer
          for more than a decade, I’ve developed a sharp eye for detail,{" "}
          <strong>user-centered design</strong>, and effective visual
          storytelling. My background includes extensive experience in{" "}
          <strong>creative artworking</strong> and{" "}
          <strong>annual report design</strong>, where precision, consistency,
          and collaboration are essential across both print and digital
          projects.
          <br />
          <br />
          I’m <span className="text-red-500"><strong>Arabic</strong></span> literate and my reading and writing skills enables me to work confidently in both English and Arabic. Having lived and worked in <strong>Saudi Arabia</strong>, I bring valuable cultural awareness and understanding of the Middle Eastern market to my projects.

          <br />
          <br />
          My passion for modern technology led me to earn a
          <strong> Diploma in Frontend Web Development</strong> from the
          <strong> University of Birmingham</strong>, where I honed my skills in
          <strong> HTML,</strong> <strong>CSS,</strong> <strong>JavaScript,</strong><strong> React</strong> and other modern
          technologies. I now bring together design thinking and technical expertise to craft engaging, accessible,
          and visually compelling digital experiences.
        </p>

        {/* --- SKILL AREAS --- */}
        <div className="grid sm:grid-cols-3 gap-7 mt-10">

          {/* Web Developer */}
          <div className="floatingCard bg-white/90 backdrop-blur-md border border-white rounded-[28px] p-7 shadow-xl hover:-translate-y-2 hover:shadow-red-200/40 transition duration-500">

            <div className="flex items-center gap-4 mb-5">
              <div className="w-[58px] h-[58px] rounded-2xl bg-red-100 flex items-center justify-center">
                <FaCode className="text-red-500 text-2xl" />
              </div>

              <h3 className="text-xl font-bold text-[#122254]">
                Web Developer
              </h3>
            </div>

            <p className="text-[15px] leading-8 text-[#5c6574]">
              Building responsive, accessible, and high-performing websites
              using modern technologies such as <strong>HTML</strong>,{" "}
              <strong>CSS</strong>,<strong> JavaScript</strong>, and{" "}
              <strong>React</strong>. Focused on creating clean and efficient
              code with great user experience.
            </p>
          </div>

          {/* Digital Designer */}
          <div className="card2 bg-[#122254] text-white rounded-[28px] p-7 shadow-2xl hover:-translate-y-2 transition duration-500">

            <div className="flex items-center gap-4 mb-5">

              <div className="w-[58px] h-[58px] rounded-2xl bg-red-500/20 flex items-center justify-center">
                <FaPenFancy className="text-red-400 text-2xl" />
              </div>

              <h3 className="text-xl font-bold">
                Digital Designer
              </h3>
            </div>

            <p className="text-[15px] leading-8 text-gray-300">
              Creating modern, user-centered designs and prototypes using
              <strong> Figma</strong> and <strong>Framer</strong>. Skilled in
              crafting seamless visual experiences that blend functionality with
              beauty.
            </p>
          </div>

          {/* Print & Digital Artwork */}
          <div className="card3 bg-gradient-to-br from-red-500 to-orange-400 text-white rounded-[28px] p-7 shadow-2xl hover:-translate-y-2 transition duration-500">

            <div className="flex items-center gap-4 mb-5">

              <div className="w-[58px] h-[58px] rounded-2xl bg-white/20 flex items-center justify-center">
                <FaPrint className="text-white text-2xl" />
              </div>

              <h3 className="text-xl font-bold">
                Creative Artworker
              </h3>
            </div>

            <p className="text-[15px] leading-8 text-white/90">
              Over a decade of experience producing high-quality print and digital assets, including annual reports, POS materials, OOH and digital OOH campaigns, as well as brochures and brand collateral for both online and offline platforms.
            </p>
          </div>

        </div>

        {/* --- Work Button --- */}
        <div className="heroFade mt-14">
          <Link to="work" smooth={true} offset={50} duration={500}>
            <button className="group bg-[#122254] text-white px-8 py-5 rounded-full flex items-center hover:bg-red-500 transition duration-300 shadow-xl">

              Work

              <span className="group-hover:translate-x-2 group-hover:rotate-[-10deg] duration-300">
                <HiArrowNarrowRight className="ml-3 text-xl" />
              </span>

            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;