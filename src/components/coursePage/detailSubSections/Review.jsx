import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import instructor from "../../../assets/coursePage/instructor-1.jpg";
import { CiStar } from "react-icons/ci";

const Review = () => {
  const [addRating, setAddRating] = useState(0);

  return (
    <div className="course-detail-content-3">
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
            Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec
            eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat
            volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget
            auctor metus, ac dapibus dolor.
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
            Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec
            eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat
            volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget
            auctor metus, ac dapibus dolor.
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
            Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec
            eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat
            volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget
            auctor metus, ac dapibus dolor.
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
                return <CiStar key={item} onClick={() => setAddRating(item)} />;
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
    </div>
  );
};

export default Review;
