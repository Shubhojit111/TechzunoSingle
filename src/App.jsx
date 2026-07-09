import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import { GravityStarsBackground } from "./components/ui/GravityStarsBackground";

const App = () => {
  return (
    <div className="min-h-screen relative text-white">
      {/* <GravityStarsBackground className="fixed inset-0 -z-50 pointer-events-none" /> */}
      <ScrollToTopBtn />
      <Navbar />
      <Hero />
      <Services />
      <Advantages />
      <Portfolio /> 
      <FAQ />
      <Footer />
     
      {/*
       */}
      {/*
       */}
    </div>
  );
};

export default App;
