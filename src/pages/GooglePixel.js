import Navbar from "../Components/Navbar";
import pixelImage from "../Assets/projects/Proj12.jpg";

export default function GooglePixel() {
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
              Google Pixel 10 Launch Campaign
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
              Designed in Figma, refined in Photoshop and developed into a
              responsive HTML email campaign supporting the launch of the
              Google Pixel 10.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="bg-white/10 px-4 py-2 rounded-full">
                Email Design
              </span>

              <span className="bg-white/10 px-4 py-2 rounded-full">
                HTML Email
              </span>

              <span className="bg-white/10 px-4 py-2 rounded-full">
                Responsive Development
              </span>
            </div>
          </div>
        </section>

        {/* PROJECT IMAGE */}
        <section className="py-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto">
            <img
              src={pixelImage}
              alt="Google Pixel 10 Campaign"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </section>

        {/* PROJECT INFO */}
        <section className="pb-20 px-6 md:px-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="font-bold text-xl mb-2">Role</h3>
              <p className="text-slate-600">
                Email Designer & Developer
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">Tools</h3>
              <p className="text-slate-600">
                Figma, Photoshop, HTML, CSS
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">Year</h3>
              <p className="text-slate-600">2025</p>
            </div>

          </div>
        </section>

        {/* OVERVIEW */}
        <section className="bg-gray-50 py-20 px-6 md:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black mb-8">
              Project Overview
            </h2>

            <p className="text-lg leading-relaxed text-slate-600">
              This campaign was created to support the launch of the Google
              Pixel 10, showcasing key product features through a visually
              engaging and fully responsive email experience. The project
              combined design, image optimisation and front-end email
              development to ensure consistent rendering across major email
              clients.
            </p>
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
                  Product Storytelling
                </h3>

                <p className="text-slate-600">
                  Communicate key Pixel 10 features in a concise and engaging
                  format.
                </p>
              </div>

              <div className="bg-white shadow rounded-xl p-8">
                <h3 className="font-bold mb-3">
                  Email Compatibility
                </h3>

                <p className="text-slate-600">
                  Ensure consistent rendering across Outlook, Gmail and Apple
                  Mail.
                </p>
              </div>

              <div className="bg-white shadow rounded-xl p-8">
                <h3 className="font-bold mb-3">
                  Responsive Layout
                </h3>

                <p className="text-slate-600">
                  Deliver a seamless experience across desktop and mobile
                  devices.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#122254] text-white py-20 px-6 md:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black mb-10">
              Design & Development Process
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div>
                <h3 className="text-red-400 text-2xl font-bold mb-3">
                  Design
                </h3>

                <p className="text-gray-300">
                  Designed layouts and visual assets in Figma aligned with
                  Google's product launch messaging.
                </p>
              </div>

              <div>
                <h3 className="text-red-400 text-2xl font-bold mb-3">
                  Production
                </h3>

                <p className="text-gray-300">
                  Refined graphics and optimised assets in Photoshop for email
                  performance.
                </p>
              </div>

              <div>
                <h3 className="text-red-400 text-2xl font-bold mb-3">
                  Development
                </h3>

                <p className="text-gray-300">
                  Built a fully responsive HTML email using industry-standard
                  coding techniques.
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
                <p className="mt-3">Responsive Design</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-4xl font-bold text-red-500">✓</h3>
                <p className="mt-3">Cross-Client Support</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-4xl font-bold text-red-500">✓</h3>
                <p className="mt-3">Optimised Assets</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-4xl font-bold text-red-500">✓</h3>
                <p className="mt-3">Launch Ready</p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#122254] py-20 px-6 md:px-20 text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Explore the Campaign
          </h2>

          <a
            href="https://store.google.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex px-8 py-4 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
          >
            Visit Google Store
          </a>
        </section>

      </div>
    </>
  );
}