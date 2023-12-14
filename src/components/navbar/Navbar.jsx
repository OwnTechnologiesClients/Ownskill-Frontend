import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoblack from "../../assets/logo-light.png";
import hamburger from "../../assets/menu.png";
import search from "../../assets/loupe.png";
import profile from "../../assets/user.png";
import { FaAngleDown } from "react-icons/fa";
import "./Navbar.scss";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isActiv, setIsActiv] = useState("home");
  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="navbar">
      <Link to={"/"} className="pc-logo">
        <img src={logoblack} alt="LOGO" />
      </Link>

      <div className="mobile-nav">
        <Link to={"/"}>
          <img src={logoblack} alt="LOGO" />
        </Link>
        <img src={hamburger} onClick={handleNav} alt="" />
      </div>

      <ul className={`${isNavOpen ? "open-nav" : ""}`}>
        <button onClick={handleNav}>X</button>
        <li>
          <NavLink
            to="/"
            className={`${isActiv === "home" ? "activ" : ""}`}
            onClick={() => setIsActiv("home")}
          >
            Home <FaAngleDown />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#service"
            className={`${isActiv === "service" ? "activ" : ""}`}
            onClick={() => setIsActiv("service")}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#about"
            className={`${isActiv === "about" ? "activ" : ""}`}
            onClick={() => setIsActiv("about")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#course"
            className={`${isActiv === "course" ? "activ" : ""}`}
            onClick={() => setIsActiv("course")}
          >
            Course
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#teacher"
            className={`${isActiv === "teacher" ? "activ" : ""}`}
            onClick={() => setIsActiv("teacher")}
          >
            Teacher
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#blog"
            className={`${isActiv === "blog" ? "activ" : ""}`}
            onClick={() => setIsActiv("blog")}
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <div className="get-in-touch">
        <div>
            <img src={search} alt="" />
        </div>
        <div>
            <img src={profile} alt="" />
        </div>
        <Link >
        Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
