import React from "react";
import HeroSection from '../componets/HeroSection';
import PropertyList from '../componets/PropertyList';
import RequestSection from '../componets/RequestSection';
import Footer from '../componets/Footer';




const Home = () => {
  return (
    <>
      <HeroSection />
      <PropertyList />
      <RequestSection />
      <Footer />
    </>
  );
};

export default Home;
