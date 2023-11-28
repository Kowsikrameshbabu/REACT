import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
/*import BannerImage from "../Assets/home-banner-image.png";*/
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import home2 from "../Assets/home2.png"




const Home = () => {

  
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Make your Life scheduled with PlanAhead 
          </h1>
          <p className="primary-text">
          Sign up and get started with PlanAhead today. A world of productive teamwork awaits!
          </p>
          
          <button className="secondary-button" >
            Get started <FiArrowRight />{" "}
          </button>
          
        </div>
        <div className="home-image-section">
          <img src={home2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
