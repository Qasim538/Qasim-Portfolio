import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import TombolaBanners from "./pages/TombolaBanners";
import ScrollToTop from "./Components/ScrollToTop";
import GooglePixel from "./pages/GooglePixel";
import CiscoEmail from "./pages/CiscoEmail";
import VauxhallCampaign from "./pages/VauxhallCampaign";
import Afreximbank from "./pages/Afreximbank";

function MainPortfolio() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <Routes>
      <Route path="/afreximbank" element={<Afreximbank />} />
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/tombola-banners" element={<TombolaBanners />} />
        <Route path="/google-pixel" element={<GooglePixel />} />
        <Route path="/cisco-email" element={<CiscoEmail />} />
        <Route path="/vauxhall-campaign" element={<VauxhallCampaign />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
