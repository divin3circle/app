import React from 'react';
import Hero from '../components/header/Hero';
import About from '../components/ui/About';
import Advantages from '../components/ui/Advantages';
import Footer from '../components/footer/Footer';
import Token from '../components/ui/Token';

export type TLoadingProps = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Landing = ({ loading, setLoading }: TLoadingProps) => {
  return (
    <div>
      <Hero loading={loading} setLoading={setLoading} />
      <About />
      <Token />
      <Advantages />
      <Footer />
    </div>
  );
};

export default Landing;
