import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/home/Hero/Hero";
import Features from "../../components/home/features/Features";
import AboutUs from "../../components/home/aboutUs/AboutUs";
import Category from "../../components/home/category/Category";
import Courses from "../../components/home/courses/Courses";
import Counter from "../../components/home/counterSection/Counter";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Hero />

      <Features />

      <AboutUs />

      <Category />

      <Courses />

      <Counter />

    </div>
  );
};

export default Home;
