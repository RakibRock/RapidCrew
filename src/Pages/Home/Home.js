import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
