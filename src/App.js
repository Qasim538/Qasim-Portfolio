import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import TombolaBanners from "./pages/TombolaBanners";
import ScrollToTop from "./Components/ScrollToTop"

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
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/tombola-banners" element={<TombolaBanners />} />
      </Routes>
    </HashRouter>
  );
}

export default App;