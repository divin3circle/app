import React from 'react';
import Hero from '../components/header/Hero';
import About from '../components/ui/About';
import Advantages from '../components/ui/Advantages';
import Footer from '../components/footer/Footer';
import Token from '../components/ui/Token';

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Token />
      <Advantages />
      <Footer />
    </div>
  );
};

export default Landing;
