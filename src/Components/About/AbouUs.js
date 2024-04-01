import React, { Fragment } from "react";
import vision from "../../images/vision.jpg";
import "./about.css";
const AbouUs = () => {
  return (
    <Fragment>
      <section className="aboutSec">
        <h1>Our Vision</h1>
        <div className="container">
          
          <img src={vision} alt="" />
          <p>
            "To redefine online shopping by seamlessly blending style,
            convenience, and innovation, creating an unparalleled experience
            that empowers individuals to express their unique identity
            effortlessly. We aspire to be the premier destination where fashion
            meets technology, inspiring confidence and fostering connections
            within our global community."
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default AbouUs;
