import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We will provide better education to each & everyone.</h1>
        <p>
          our curriculum is design to make students industry ready not only that
          we will provide hands on practical knowlede to each & everyone.
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="Dark arrow is here" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
