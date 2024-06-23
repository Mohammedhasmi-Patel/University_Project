import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programmes from "./components/Programmes/Programmes";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <Title subTitle="Our Programmes" title="What We Offer" />
          <Programmes />
          <About />
          <Title subTitle="Gallery" title="Campus Photos" />
          <Campus />
          <Title subTitle="Testimonials" title="What Students Says" />
          <Testimonials />
          <Title subTitle="Contact Us" title="Get in Touch" />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
