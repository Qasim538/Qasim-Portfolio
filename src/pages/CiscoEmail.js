import Navbar from "../Components/Navbar";
import ciscoImage from "../Assets/projects/Proj11.jpg";

export default function CiscoEmail() {
  return (
    <>
      <Navbar />

      <section className="bg-[#f5f7fb] py-24">
        <div className="max-w-[1100px] mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-black text-[#122254]">
            Cisco Email Design & Development
          </h1>

          {/* Description */}
          <p className="mt-4 text-slate-600 max-w-2xl">
            A clean, responsive HTML email design built from Figma,
            focused on enterprise communication and consistent branding for Cisco.
          </p>

          {/* Image */}
          <img
            src={ciscoImage}
            alt="Cisco Email Design"
            className="w-full rounded-xl mt-10 shadow-sm"
          />

          {/* Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-[#233554]">
            <div>
              <h3 className="font-bold">Role</h3>
              <p>Email Designer & Developer</p>
            </div>

            <div>
              <h3 className="font-bold">Tools</h3>
              <p>Figma, HTML, CSS</p>
            </div>

            <div>
              <h3 className="font-bold">Year</h3>
              <p>2025</p>
            </div>
          </div>

          {/* Button */}
          <a
            href="https://www.cisco.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-10 px-5 py-2 rounded-lg bg-[#122254] text-white hover:bg-[#1b2f66] transition"
          >
            Visit Cisco
          </a>

        </div>
      </section>
    </>
  );
}