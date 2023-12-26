import React, { useState } from "react";
import "./CourseDetail.scss";
import "./CourseDetail1.scss";
import courseImage from "../../../assets/coursePage/course-detail-1.jpg";
import pfp from "../../../assets/coursePage/author-7.png";
import instructor from "../../../assets/coursePage/instructor-1.jpg";
import courseCardImage from "../../../assets/coursePage/lc-1.jpg";
import { IoFolderOpenOutline } from "react-icons/io5";
import {
  FaArrowRight,
  FaCircleCheck,
  FaCircleChevronRight,
  FaStar,
} from "react-icons/fa6";
import { GiBackwardTime, GiNotebook } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { IoPlayCircleOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiSpeakLine } from "react-icons/ri";

const CourseDetail = () => {
  const [addRating, setAddRating] = useState(0);

  return (
    <div className="course-detail">
      <div className="course-detail-expand">
        <img src={courseImage} alt="" />
        <div className="profile-section-bar">
          <img src={pfp} alt="" />
          <div className="name-design">
            <h2>Mitsuri</h2>
            <h3>PROJECT MANAGEER</h3>
          </div>
          <button>Development</button>
          <div className="rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>(25 Reviews)</p>
          </div>

          <div className="price">$473.00</div>
        </div>
        <h2>Management Consultants in Competitive Markets</h2>

        <div className="course-navigation">
          <button>Overview</button>
          <button>Curriculum</button>
          <button>Review</button>
          <button>Instructor</button>
        </div>

        {/* <div className="course-detail-content-1">
          <p>
            Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec
            eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat
            volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget
            auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum
            accumsan vitae vitae nibh. <br />
            <br />
            Himenaeos. Vestibulum sollicitudin varius mauris non dignissim. Sed
            quis iaculis est. Nulla quam neque, interdum vitae fermentum
            lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis
            euismod tellus. Nam vel lacus eu nisl bibendum accumsan vitae vitae
            nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non
            odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit
            ipsum. Sed eget auctor metus, ac dapibus dolo <br />
            <br />
            Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec
            eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat
            volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget
            auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum
            accumsan vitae vitae nibh.
          </p>
          <ul>
            <li>
              <FaCircleCheck /> Nam at elit nec neque suscipit gravida.
            </li>
            <li>
              <FaCircleCheck /> Nam at elit nec neque suscipit gravida.
            </li>
            <li>
              <FaCircleCheck /> Nam at elit nec neque suscipit gravida.
            </li>
          </ul>
        </div> */}
        {/* <div className="course-detail-content-2">
          <img src={instructor} alt="" />
          <div className="name-design">
            <h2>Mitsuri</h2>
            <h3>PROJECT MANAGEER</h3>
            <p>
              Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec
              eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat
              volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget
              auctor metus, ac dapibus dolor.
            </p>
          </div>
        </div> */}
        {/* <div className="course-detail-content-3">
          <h2>2 Reviews</h2>

          <div className="review-card-course-page-section">
            <img src={instructor} alt="" />
            <div>
              <div className="heading">
                <span>David Shon </span>
                <span>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
              <p>
                Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam
                nec eros id magna hendrerit sagittis. Nullam sed mi non odio
                feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum.
                Sed eget auctor metus, ac dapibus dolor.
              </p>
            </div>
          </div>
          <div className="review-card-course-page-section">
            <img src={instructor} alt="" />
            <div>
              <div className="heading">
                <span>David Shon </span>
                <span>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
              <p>
                Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam
                nec eros id magna hendrerit sagittis. Nullam sed mi non odio
                feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum.
                Sed eget auctor metus, ac dapibus dolor.
              </p>
            </div>
          </div>
          <div className="review-card-course-page-section">
            <img src={instructor} alt="" />
            <div>
              <div className="heading">
                <span>David Shon </span>
                <span>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
              <p>
                Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam
                nec eros id magna hendrerit sagittis. Nullam sed mi non odio
                feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum.
                Sed eget auctor metus, ac dapibus dolor.
              </p>
            </div>
          </div>

          <div className="add-reviews">
            <h3>Add a Review</h3>

            <form>
              <div className="stars">
                <span>Rate this Product</span>
                <div className="star-empty">
                  {[1, 2, 3, 4, 5].map((item) => {
                    return (
                      <CiStar key={item} onClick={() => setAddRating(item)} />
                    );
                  })}
                </div>
                <div className="star-full">
                  {Array.from({ length: addRating }, (_, x) => (
                    <FaStar key={x} />
                  ))}
                </div>
              </div>
              <div className="name-address">
                <input
                  type="text"
                  placeholder="Your Name"
                  // value={reviewData.rname}
                  // onChange={handleChange}
                  name="rname"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  // value={reviewData.remail}
                  // onChange={handleChange}
                  name="remail"
                />
              </div>

              <textarea
                name="rcomment"
                id="comment"
                placeholder="Comment"
                // value={reviewData.rcomment}
                // onChange={handleChange}
              />

              <button
                // onClick={postReview}
                className="post-review"
              >
                Leave a Review <FaCircleChevronRight />
              </button>
            </form>
          </div>
        </div> */}
        <div className="course-detail-content-4">
          <h2>Starting Beginners Level Course</h2>
          <p>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.</p>

          <div className="intro">
            <IoPlayCircleOutline/> Introduction of Editing
            <button>Preview</button>
            <span>10 Minutes</span>
          </div>
          <div className="overview">
            <IoPlayCircleOutline/> Overview of Editing
            <button>Preview</button>
            <span>10 Minutes</span>
          </div>
          <div className="basic">
            <IoFolderOpenOutline/> Basic Editing Technology
          </div>
        </div>
      </div>
      <div className="features-other-courses">
        <div className="features-course-page">
          <h3>Course Features</h3>
          <ul>
            <li>
              <li>
                <GiBackwardTime /> Duration
              </li>{" "}
              <li>{20} Hours</li>
            </li>
            <li>
              <li>
                <GiNotebook /> Lessons
              </li>{" "}
              <li>15</li>
            </li>
            <li>
              <li>
                <PiStudent /> Students
              </li>{" "}
              <li>Max {15}</li>
            </li>
            <li>
              <li>
                <IoPlayCircleOutline /> Videos
              </li>{" "}
              <li>{10} Hours</li>
            </li>
            <li>
              <li>
                <HiOutlineLightBulb /> Skill Level
              </li>{" "}
              <li>Advanced</li>
            </li>
            <li>
              <li>
                <RiSpeakLine /> Language
              </li>{" "}
              <li>English</li>
            </li>
          </ul>
          <button>
            Buy This Course <FaArrowRight />
          </button>
        </div>
        <div className="other-courses">
          <h3>Latest Course</h3>

          <div className="course-page-course-card">
            <img src={courseCardImage} alt="" />
            <div className="">
              <h4>
                By <span>Robert Fox</span>
              </h4>
              <p>The Complete Web....</p>
              <div className="rating-course-card">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span>4.8(30)</span>
              </div>
            </div>
          </div>
          <div className="course-page-course-card">
            <img src={courseCardImage} alt="" />
            <div className="">
              <h4>
                By <span>Robert Fox</span>
              </h4>
              <p>The Complete Web....</p>
              <div className="rating-course-card">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span>4.8(30)</span>
              </div>
            </div>
          </div>
          <div className="course-page-course-card">
            <img src={courseCardImage} alt="" />
            <div className="">
              <h4>
                By <span>Robert Fox</span>
              </h4>
              <p>The Complete Web....</p>
              <div className="rating-course-card">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span>4.8(30)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
