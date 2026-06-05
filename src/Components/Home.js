import { HiArrowNarrowRight } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import { FaCode, FaPenFancy, FaPrint } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      ".heroFade",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power2.out",
      }
    );

    gsap.to(".card1", {
      y: -8,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".card2", {
      y: -9,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".card3", {
      y: -7,
      duration: 5.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen bg-[#f5f7fb] text-[#233554] py-20 relative overflow-hidden"
    >
      {/* background blur */}
      <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-red-200/30 blur-[120px] rounded-full"></div>

      <div className="max-w-[1100px] mx-auto px-8 flex flex-col justify-center relative z-10">

        <p className="heroFade text-red-500 mt-10 tracking-[3px] uppercase text-sm font-semibold">
          Hi, I am
        </p>

        <h1 className="heroFade text-4xl sm:text-5xl font-black text-[#122254] mt-3 leading-tight">
          Qasim Muhammad
        </h1>

        <small className="heroFade sm:text-2xl text-[#3c4b6e] mt-4 tracking-wide leading-9">
          Developer <span className="text-red-500">|</span> Designer{" "}
          <span className="text-red-500">|</span> Artworker
        </small>

        {/* FULL TEXT KEPT EXACTLY AS YOU WROTE IT */}
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
          I’m{" "}
          <span className="text-red-500">
            <strong>Arabic</strong>
          </span>{" "}
          literate and my reading and writing skills enables me to work
          confidently in both English and Arabic. Having lived and worked in{" "}
          <strong>Saudi Arabia</strong>, I bring valuable cultural awareness and
          understanding of the Middle Eastern market to my projects.
          <br />
          <br />
          My passion for modern technology led me to earn a
          <strong> Diploma in Frontend Web Development</strong> from the
          <strong> University of Birmingham</strong>, where I honed my skills in
          <strong> HTML,</strong> <strong>CSS,</strong>{" "}
          <strong>JavaScript,</strong>
          <strong> React</strong> and other modern technologies. I now bring
          together design thinking and technical expertise to craft engaging,
          accessible, and visually compelling digital experiences.
        </p>

        {/* SKILL CARDS */}
        <div className="grid sm:grid-cols-3 gap-6 mt-10 items-stretch">

          {/* Web Developer */}
          <div className="card1 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
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

          {/* UI/UX Designer */}
          <div className="card2 bg-[#122254] text-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-[58px] h-[58px] rounded-2xl bg-red-500/20 flex items-center justify-center">
                <FaPenFancy className="text-red-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold">UI/UX Designer</h3>
            </div>

            <p className="text-[15px] leading-8 text-gray-300">
              Creating modern, user-centered designs and prototypes using
              <strong> Figma</strong> and <strong>Framer</strong>. Skilled in
              crafting seamless visual experiences that blend functionality with
              beauty.
            </p>
          </div>

          {/* Artworker */}
          <div className="card3 bg-gradient-to-br from-red-500 to-orange-400 text-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-[58px] h-[58px] rounded-2xl bg-white/20 flex items-center justify-center">
                <FaPrint className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold">Creative Artworker</h3>
            </div>

            <p className="text-[15px] leading-8 text-white/90">
              Over a decade of experience producing high-quality print and
              digital assets, including annual reports, POS materials, OOH and
              digital OOH campaigns, as well as brochures and brand collateral
              for both online and offline platforms.
            </p>
          </div>

        </div>

        {/* BUTTON */}
        <div className="heroFade mt-14">
          <ScrollLink to="work" smooth={true} offset={-80} duration={500}>
            <button className="group bg-[#122254] text-white px-8 py-5 rounded-full flex items-center hover:bg-red-500 transition duration-300 shadow-sm hover:shadow-md">
              Work
              <span className="group-hover:translate-x-2 transition duration-300">
                <HiArrowNarrowRight className="ml-3 text-xl" />
              </span>
            </button>
          </ScrollLink>
        </div>

      </div>
    </section>
  );
};

export default Home;