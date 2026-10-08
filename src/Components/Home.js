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
          Senior Creative <span className="text-red-500">|</span> Digital, AI
          &amp; Brand Experiences
        </small>

        {/* PROFILE */}
        <p className="heroFade text-[#5c6574] py-6 max-w-[950px] leading-9 text-[16px]">
          I’m a <strong>Senior Creative</strong> with{" "}
          <strong>16+ years of industry experience</strong> working across
          global brands and fast-paced creative environments. I combine{" "}
          <strong>creative craftsmanship</strong>, technical knowledge and
          strong attention to detail to deliver thoughtful visual
          communications across <strong>digital and print</strong>. My work
          spans creative artworking, brand communications, digital campaigns,
          packaging, presentations and <strong>annual reports</strong>, taking
          projects from the initial brief through adaptation and final delivery.
          <br />
          <br />
          I bring a forward-thinking approach to{" "}
          <strong>digital design and creative technology</strong>, working with{" "}
          <strong>Figma</strong>, <strong>Webflow</strong>,{" "}
          <strong>Workiva</strong> and modern front-end tools. From{" "}
          <strong>HTML5 banners</strong> and{" "}
          <strong>email design and development</strong> to responsive websites
          and landing pages, I connect design with development to create
          engaging digital experiences. I also use{" "}
          <strong>generative AI and workflow automation</strong> to explore
          ideas, support creative production and improve efficiency.
          <br />
          <br />
          I read, write and speak{" "}
          <span className="text-red-500">
            <strong>Arabic</strong>
          </span>{" "}
          and work confidently across English and Arabic projects. Having lived
          and worked in <strong>Saudi Arabia</strong>, I bring cultural
          awareness and an understanding of the Middle Eastern market to{" "}
          <strong>localisation, transcreation and multilingual artwork</strong>.
          Across every project, I focus on brand consistency, technical
          accuracy and effective collaboration with creative, marketing and
          production teams.
        </p>

        {/* SKILL CARDS */}
        <div className="grid sm:grid-cols-3 gap-6 mt-10 items-stretch">
          {/* Digital Development */}
          <div className="card1 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-[58px] h-[58px] rounded-2xl bg-red-100 flex items-center justify-center">
                <FaCode className="text-red-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#122254]">
                Digital Development
              </h3>
            </div>

            <p className="text-[15px] leading-8 text-[#5c6574]">
              Developing responsive websites, landing pages,{" "}
              <strong>HTML5 banners</strong> and <strong>HTML emails</strong>{" "}
              using <strong>HTML5</strong>, <strong>CSS3</strong>,{" "}
              <strong>JavaScript</strong>, <strong>React</strong> and{" "}
              <strong>GSAP</strong>. Combining thoughtful design with clean
              code, engaging animation and precise technical delivery.
            </p>
          </div>

          {/* Digital & AI Design */}
          <div className="card2 bg-[#122254] text-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-[58px] h-[58px] rounded-2xl bg-red-500/20 flex items-center justify-center">
                <FaPenFancy className="text-red-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold">Digital &amp; AI Design</h3>
            </div>

            <p className="text-[15px] leading-8 text-gray-300">
              Creating considered <strong>UX/UI designs</strong>, prototypes
              and digital campaign assets using <strong>Figma</strong>,{" "}
              <strong>Sketch</strong> and <strong>Adobe Creative Cloud</strong>.
              Bringing together visual storytelling, brand identity and{" "}
              <strong>AI-assisted creative workflows</strong> to develop
              polished, engaging brand experiences.
            </p>
          </div>

          {/* Creative Artworking */}
          <div className="card3 bg-gradient-to-br from-red-500 to-orange-400 text-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-[58px] h-[58px] rounded-2xl bg-white/20 flex items-center justify-center">
                <FaPrint className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold">Creative Artworking</h3>
            </div>

            <p className="text-[15px] leading-8 text-white/90">
              Delivering refined print and digital artwork across{" "}
              <strong>annual reports</strong>, <strong>packaging</strong>,
              presentations, OOH and brand communications. Experienced in{" "}
              <strong>InDesign</strong>, <strong>Workiva</strong> and{" "}
              <strong>ICML workflows</strong>, with a focus on typography,
              multilingual adaptation, brand consistency and quality control.
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