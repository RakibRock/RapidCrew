import React from "react";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
