import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-light.png";
import fbicon from "../../assets/icons/facebook1.png";
import yticon from "../../assets/icons/youtube.png";
import igicon from "../../assets/icons/instagram.png";
// import checkbox from '../../assets/icons/checkbox.png'
// import down from '../../assets/icons/down.png'
// import call from '../../assets/call.png'
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import footerbg from "../../assets/footer-bg-1.png";
import { FaArrowUp } from "react-icons/fa6";
import "./Footer.scss";

const Footer = () => {
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

  function scrollToTopSmoothly() {
    // Get the current scroll position of the window
    const currentScrollY = window.scrollY;

    // Calculate the number of steps for the animation
    const totalSteps = 30; // Adjust this value to control the scroll speed

    // Calculate the distance to scroll in each step
    const scrollStep = currentScrollY / totalSteps;

    // Define the scroll function
    function scroll() {
      if (window.scrollY > 0) {
        window.scrollTo(0, window.scrollY - scrollStep);
        requestAnimationFrame(scroll);
      }
    }

    // Start the smooth scrolling animation
    scroll();
  }
  return (
    <div>
      <div className="footer">
        <img className="footer-bg" src={footerbg} alt="" />
        <div className="detail">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <br></br>
          <br />
          <div className="message">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
          <div className="top-icons">
            <a
              href="https://www.facebook.com/chmtime?mibextid=ZbWKwL"
              target="_blank"
            >
              <img src={fbicon} alt="" />
            </a>
            <a href="https://www.youtube.com/@ASAPCHEMTIME" target="_blank">
              <img src={yticon} alt="" />
            </a>
            <a
              href="https://www.instagram.com/asapchemtime?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
            >
              <img src={igicon} alt="" />
            </a>
          </div>
        </div>
        <div className="courses">
          <h4>Quick Links</h4>
          <Link to="#">
            <li>About Us</li>
          </Link>
          <Link to="#">
            <li>Careers</li>
          </Link>
          <Link to="#">
            <li>News and Blog</li>
          </Link>
          <Link to="#">
            <li>Support Policy</li>
          </Link>
          <Link to="#">
            <li>Shop By Location</li>
          </Link>
        </div>
        <div className="links ">
          <h4>Explore</h4>

          <div className="link">
            <Link to="/about">Tour Guide</Link>
          </div>
          <div className="link">
            <Link to="/videos">Tour Booking</Link>
          </div>
          <div className="link">
            <Link to="/blog">Mobile App</Link>
          </div>
          <div className="link">
            <Link to="/student-login">Courses</Link>
          </div>
          <div className="link">
            <Link to="/onlinecourses">Customer Services</Link>
          </div>
        </div>
        <div className="box">
          <h4>Contact Us</h4>

          <p>
            <IoLocationOutline /> 6391 Elgin St Celina, Delaware 10299
          </p>
          <p>
            <IoCallOutline /> (303) 555-0105
          </p>
          <p>
            <MdMailOutline /> keshav@example.com
          </p>

          <div className="send-message">
            <input type="text" placeholder="Send Message" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="rights">
          <p>
            {" "}
            Copyright © 2023{" "}
            <a href="https://owntechnologies.com/" target="_blank">
              OwnTechnologies
            </a>
            . All Rights Reserved
          </p>
        </div>
        <div className={`${isSticky?"top":"hide-top"}`}>
          <a onClick={() => scrollToTopSmoothly()}>
            <FaArrowUp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
