import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import contactpro from "../Assets/contactpro.png"; 
import newabout from "../Assets/newabout.png"

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={newabout} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Smoother workdays with a PlanAhead meeting scheduler
        </h1>
        <p className="primary-text">
        Scheduling meetings and meeting rooms shouldn't be a hassle 
– it should just work. Whether you need a meeting scheduling app on your phone, physical room displays or room overview screens – or a combination of them, we got the solutions to make your workplace smarter and your workdays smoother.
        </p>
        <p className="primary-text">
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
