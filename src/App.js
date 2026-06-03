import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import TombolaBanners from "./pages/TombolaBanners";

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
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/tombola-banners" element={<TombolaBanners />} />
      </Routes>
    </HashRouter>
  );
}

export default App;