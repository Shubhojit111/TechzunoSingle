import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
// import Footer from './components/Footer';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import Footer from '../Footer';

const App = () => {
  return (
    <div className="min-h-screen text-white">
      <ScrollToTopBtn />
      <Navbar />
      <Hero />
      <Services />
      <Advantages />
      <Portfolio />
      <FAQ />
      {/* 
      */} 
      {/* <Footer />  */}
      {/* 
      <Footer />
      */} 
    </div>
  );
};

export default App;
