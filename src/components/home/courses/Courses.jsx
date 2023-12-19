import React from "react";
import "./Courses.scss";
import { CiHeart } from "react-icons/ci";
import courseImg from '../../../assets/course/course-1-3.png'
import courseProfile from "../../../assets/course/author-4.png"


const Course = () => {
  return (
    <div className="course">
      <div className="course-image">
        <div className="bg-course"></div>
        <img src={courseImg} alt="" />
        <div className="heart">
          <CiHeart/>
        </div>
      </div>
      <div className="hours">20 Hours</div>
      <div className="review">
        <span>*</span>
        <p>(23 Reviews)</p>
      </div>
      <div className="heading">
        Building Responsive User Interfaces to Implementing
      </div>
      <div className="profile">
        <div className="name">
          <img src={courseProfile} alt="" />
          <div className="name-desig">
            <h5>Jane Cooper</h5>
            <h6>REACT JS DEVELOPER</h6>
          </div>
        </div>
        <div className="price">
          <h2>$739.65</h2>
          <h4>15 LESSONS</h4>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <div className="courses-section">
      <h4>Best Course</h4>
      <h2>Featured Course On This Month</h2>
      <div className="courses-container">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return <Course key={index} />;
        })}
      </div>
    </div>
  );
};

export default Courses;
