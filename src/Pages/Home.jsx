import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import BrandValue from "./homeComponents/BrandValue";
import Construction from "./homeComponents/Construction";
import Contact from "./homeComponents/Contact";
import Crafting from "./homeComponents/Crafting";
import Features from "./homeComponents/Features";
import Hero from "./homeComponents/Hero";
import MocUp from "./homeComponents/MocUp";
import Portfolio from "./homeComponents/Portfolio";
import WhatWeDo from "./homeComponents/WhatWeDo";

const Home = () => {
  return (
    <div className="bg-[#e4d3c8]">
      <NavBar />
      <Hero />
      <Features />
      <Portfolio />
      <BrandValue />
      <Construction />
      <WhatWeDo />
      <MocUp />
      <Crafting />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
