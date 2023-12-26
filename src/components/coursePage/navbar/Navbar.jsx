import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoblack from "../../../assets/logo-two.png";
import hamburger from "../../../assets/menu.png";
import { IoSearch } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import phoneIcon from "../../../assets/icons/newCall.png";
import { FaAngleDown } from "react-icons/fa";
import "./Navbar.scss";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isActiv, setIsActiv] = useState("course");
  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={` both-nav`}>
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
          <IoSearch />
          <GoPerson />
        </div>
        <div className="contact-header-2">
          <div className="img">
            <img src={phoneIcon} alt="" />
          </div>
          <div className="detail-header-2">
            <h2>8595764714</h2>
            <h4>Call To Question</h4>
          </div>
        </div>
      </div>
      <div className={`sticky-nav ${isSticky ? "sticky" : ""}`}>
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
              to="/courses"
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
          <IoSearch />
          <GoPerson />
        </div>
        <div className="contact-header-2">
          <div className="img">
            <img src={phoneIcon} alt="" />
          </div>
          <div className="detail-header-2">
            <h2>8595764714</h2>
            <h4>Call To Question</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
