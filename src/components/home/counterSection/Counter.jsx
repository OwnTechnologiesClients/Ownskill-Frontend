import React from "react";
import "./Counter.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const Counter = () => {
  return (
    <div className="counter-section">
      <div className="detail">
        <h4>Create Your Free Account</h4>
        <div className="content">
          The generated Lorem Ipsum is therefore always free from repetition,
          injected humour, or non-characteristic.
        </div>
        <button>
          Discover More <FaArrowRightLong />
        </button>
      </div>

      <div className="counter">
        <div className="shapes">
          <svg
            viewBox="0 0 581 596"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M161.37 12.301C221.003 -53.0048 563.794 156.411 579.671 299.209C595.548 442.007 237.88 668.171 135.305 571.868C46.2938 488.252 -0.524429 189.658 161.37 12.301Z"
              fill="url(#paint0_linear_227_946)"
            ></path>
            <path
              d="M289.511 579.243C203.626 594.241 -34.778 302.771 4.28926 182.908C43.3565 63.0458 313.639 12.301 483.973 114.853C666.745 224.904 435.092 553.933 289.511 579.243Z"
              fill="url(#paint1_linear_227_946)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_227_946"
                x1="172.303"
                y1="27.9012"
                x2="521.418"
                y2="508.929"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#4F5DE4" stop-opacity="0"></stop>
                <stop
                  offset="0.269374"
                  stop-color="#9EA6F0"
                  stop-opacity="0.550859"
                ></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_227_946"
                x1="123.876"
                y1="84.092"
                x2="408.261"
                y2="553.853"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#FF7200"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        
      </div>
    </div>
  );
};

export default Counter;
