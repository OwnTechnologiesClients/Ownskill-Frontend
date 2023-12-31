import React from "react";
import Hero from "../../components/home/Hero/Hero";
import Features from "../../components/home/features/Features";
import AboutUs from "../../components/home/aboutUs/AboutUs";
import Category from "../../components/home/category/Category";
import Courses from "../../components/home/courses/Courses";
import Counter from "../../components/home/counterSection/Counter";
import Testimonial from "../../components/home/testimonial/Testimonial";
import Members from "../../components/home/members/Members";
import Certificate from "../../components/home/certificate/Certificate";
import Footer from "../../components/footer/Footer";
import HomeNavbar from "../../components/homeNavbar/HomeNavbar";

const Home = () => {
  return (
    <div>
      <HomeNavbar />

      <Hero />

      <Features />

      <AboutUs />

      <Category />

      <Courses />

      <Counter />

      <Testimonial />

      <Members />

      <Certificate />

      <Footer/>
      
    </div>
  );
};

export default Home;
