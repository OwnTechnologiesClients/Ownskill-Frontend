import React from "react";
import "./CoursePage.scss";
import Navbar from "../../components/coursePage/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import heroImage from "../../assets/hero/page-header-bg-1-1.jpg";
import CourseDetail from "../../components/coursePage/courseDetail/CourseDetail";

const CoursePage = () => {
  return (
    <div className="course-page">
      <Navbar />

      <div className="hero-img">
        <img src={heroImage} alt="" />
        <div className="hero-content">
          <h2>Courses</h2>
          <p>Home / Courses</p>
        </div>
      </div>

      <CourseDetail/>

      <Footer />
    </div>
  );
};

export default CoursePage;
