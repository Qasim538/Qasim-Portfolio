import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaCode, FaPenFancy, FaPrint } from "react-icons/fa";
import Skills from "./Skills";

const Home = () => {
  return (
    <div name="home" className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-20">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center">
        <p className="text-red-500 mt-10">Hi, I am</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] mt-2">
          Qasim Muhammad
        </h1>
        <small className="sm:text-2xl text-[#ccd6f6] mt-2">
          Web Developer | Digital Designer | Senior Creative Artworker
        </small>

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a Frontend Developer and UI/UX Designer with over 15 years of
          experience in the creative and design industry. Having worked as a
          creative artworker and designer for more than a decade, I’ve developed
          a strong eye for detail and user-centered design.
          <br />
          <br />
          My passion for modern technology led me to earn a Diploma in Frontend
          Web Development from the University of Birmingham, where I honed my
          skills in HTML, CSS, JavaScript, and React. Today, I bring together
          design thinking and technical expertise to craft engaging, accessible,
          and visually compelling digital experiences.
        </p>

        {/* --- SKILL AREAS --- */}
        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          {/* Web Developer */}
          <div className="bg-[#112240] rounded-2xl p-6 hover:shadow-lg hover:shadow-red-500/20 transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <FaCode className="text-red-500 text-3xl" />
              <h3 className="text-xl font-semibold text-[#8892b0]">
                Web Developer
              </h3>
            </div>
            <p className="text-sm text-[#ccd6f6]">
              Building responsive, accessible, and high-performing websites using
              modern technologies such as <strong>HTML</strong>, <strong>CSS</strong>, 
              <strong> JavaScript</strong>, and <strong>React</strong>. Focused
              on creating clean and efficient code with great user experience.
            </p>
          </div>

          {/* Digital Designer */}
          <div className="bg-[#112240] rounded-2xl p-6 hover:shadow-lg hover:shadow-red-500/20 transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <FaPenFancy className="text-red-500 text-3xl" />
              <h3 className="text-xl font-semibold text-[#8892b0]">
                Digital Designer
              </h3>
            </div>
            <p className="text-sm text-[#ccd6f6]">
              Creating modern, user-centered designs and prototypes using 
              <strong> Figma</strong> and <strong>Framer</strong>. Skilled in crafting
              seamless visual experiences that blend functionality with beauty.
            </p>
          </div>

          {/* Print & Digital Artwork */}
          <div className="bg-[#112240] rounded-2xl p-6 hover:shadow-lg hover:shadow-red-500/20 transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <FaPrint className="text-red-500 text-3xl" />
              <h3 className="text-xl font-semibold text-[#8892b0]">
                Senior Creative Artworker
              </h3>
            </div>
            <p className="text-sm text-[#ccd6f6]">
              Over a decade of experience creating high-quality print and digital
              assets, including brochures, campaigns, and brand materials for 
              both online and offline platforms.
            </p>
          </div>
        </div>

        {/* --- Work Button --- */}
        <div className="mt-10">
          <Link to="work" smooth={true} offset={50} duration={500}>
            <button className="text-white border-2 px-6 py-3 flex items-center hover:bg-red-500 hover:border-red-500 transition duration-300">
              Work
              <span className="hover:rotate-90 duration-100">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <Skills />
    </div>
  );
};

export default Home;
