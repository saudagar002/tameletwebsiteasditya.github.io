// About.js
import React from "react";
import "../Style/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Aditi Hospital</h2>
          <p>
            Aditi Hospital is a leading healthcare provider dedicated to
            delivering quality medical services to the community. Our team of
            experienced and compassionate healthcare professionals is committed
            to your well-being.
          </p>
          <p>
            At Aditi Hospital, we strive to provide personalized and
            patient-centered care. We understand the importance of a supportive
            and healing environment for our patients.
          </p>
        </div>
        <div className="about-image">
          <img
            src="/hospital-building-flat-style_768258-359.avif"
            alt="Hospital"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
