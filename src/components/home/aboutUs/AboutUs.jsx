import React from "react";
import "./AboutUs.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import bannerAbout from "../../../assets/about/1.png";
import dotRectangle from "../../../assets/about/2.png";
import lines from "../../../assets/about/3.png";
import presentation from "../../../assets/about/presentation.png";
import onlineLearning from "../../../assets/about/online-learning.png";

const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="about-circle-image">
        <img className="dot-1" src={dotRectangle} alt="" />
        <img className="dot-2" src={lines} alt="" />
        <div className="contact"></div>
        <div className="banner-about">
            <div className="circle">
                <div></div>
            </div>
          <img src={bannerAbout} alt="" />
        </div>
      </div>

      <div className="about-details">
        <h4>About Us</h4>

        <h2>Creating a Lifelong Learning Best Community</h2>

        <p>
          It uses a dictionary of over 200 Latin words, combined with a handful
          of model sentence structures, to generate Lorem Ipsum which looks
        </p>

        <div className="about-detail-card">
          <div className="card-image">
          <img src={presentation} alt="" />
          </div>
          <div>
            <h3>Flexible Classes</h3>
            <p>
              The generated Lorem Ipsum is therefore always free from
              repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
        </div>
        <div className="about-detail-card">
          <div className="card-image">
          <img src={onlineLearning} alt="" />
          </div>
          <div>
            <h3>Live Class From anywhere</h3>
            <p>
              The generated Lorem Ipsum is therefore always free from
              repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
        </div>

        <button >
          Discover More <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
