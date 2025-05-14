import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="heroContent">
        <div className="heroText">
          <h1 className="heroTitle">FORK </h1>
          <h1 className="heroTitle">& </h1>
          <h1 className="heroTitle">FLAME</h1>
          <p className="heroSubtitle">
            Igniting Flavors, One Dish at a Time.
          </p>
        </div>
        <div className="heroImageContainer">
          <img src="./hero1.png" alt="Sandwich" className="heroImage" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
