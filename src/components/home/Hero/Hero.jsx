import React from "react";
import "./Hero.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import bannerImage from "../../../assets/hero/banner-1-1.png";
import bannerVideo from "../../../assets/hero/banner-video.png";
import star from "../../../assets/hero/banner-star.png";
import world from "../../../assets/hero/banner-map.png";
import hat from "../../../assets/hero/banner-cap.png";
import book from "../../../assets/hero/banner-book.png";
import spiralArrow from "../../../assets/hero/banner-1-shape-1.png";
import profile from "../../../assets/hero/banner-author.png";
import { FaCirclePlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="home-hero">
      <img className="star" src={star} alt="" />
      <img className="world" src={world} alt="" />
      <img className="hat" src={hat} alt="" />
      <img className="book" src={book} alt="" />
      <img className="spiralArrow" src={spiralArrow} alt="" />

      <div className="banner-video">
        <img src={bannerVideo} alt="" />
        <FaCirclePlay />
        <div className="box1"></div>
        <div className="box2"></div>
      </div>

      <div className="join">
        <div className="border-translate"></div>
        <img className="profile" src={profile} alt="" />
        <div className="text-profile">
          <h2>Latest Work Shop</h2>
          <p>Graphic Designer</p>
          <button>Join Now <FaArrowRightLong /></button>
        </div>
      </div>

      <div className="white-circle">
        {/* <div className="rtt">
        <div className="inner">a</div>
        </div> */}
      </div>
      <div className="white-circle white-circle-animated"></div>

      <div className="text">
        <h1>A Better Learning Journey Future Start Here</h1>
        <p>
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary,
        </p>
        <div className="buttons">
          <button className="take" onClick={() => alert("111")}>
            Take Now <FaArrowRightLong />
          </button>
          <button className="find">
            Find The Course <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="banner-image-circle">
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
