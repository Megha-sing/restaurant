import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <h3>The only thing we're serious about is food.</h3>
            </div>
            <p className="mid">
            <h4>At Fork & Flame, we don’t just serve meals — we serve experiences.</h4> Born from a fiery passion for flavor and a love for gathering people around great food, our restaurant is where creativity meets comfort on every plate.
Whether you're craving something grilled to perfection or a dish with a modern twist, our kitchen brings bold flavors, fresh ingredients, and just the right amount of flair. We're here for the food lovers, the flavor chasers, and everyone who believes that good food makes everything better.

No frills, just fire.
No fuss, just flavor.
<h4>Fork & Flame — come hungry, leave happy.</h4>
            </p>
            
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;