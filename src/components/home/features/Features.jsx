import React from "react";
import "./Features.scss";
import serviceBg from "../../../assets/hero/service-bg-1.png";
import { FaAngleRight } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";
import 'animate.css';

const OneFeature = () => {
  return (
    <div className="feature animate__animated animate__zoomIn">
      <div className="bg-banner"></div>
      <div className="details">
        <TbBulb/>
        <h3>Exclusive Coach</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, eum
          assumenda ducimus optio quam sunt.
        </p>
        <div className="read-more">
          <span>Read More</span> <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="features">
      <img src={serviceBg} alt="" />

      <div className="all-feature-container">
        {[1, 2, 3, 4].map((item, index) => {
          return <OneFeature key={index} />;
        })}
      </div>
    </div>
  );
};

export default Features;
