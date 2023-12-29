import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoFolderOpenOutline, IoPlayCircleOutline } from "react-icons/io5";

const Curriculum = () => {
  return (
    <div className="course-detail-content-4">
      <div className="starting">
        <h2 className="heading">Starting Beginners Level Course</h2>
        <p className="heading-desc">
          Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros
          id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat
          sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus,
          ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae
          nibh.
        </p>

        <div className="intro">
          <IoPlayCircleOutline /> Introduction of Editing
          <button>Preview</button>
          <span>10 Minutes</span>
        </div>
        <div className="overview">
          <IoPlayCircleOutline /> Overview of Editing
          <button>Preview</button>
          <span>10 Minutes</span>
        </div>
        <div className="basic">
          <IoFolderOpenOutline /> Basic Editing Technology
        </div>
        <div className="quiz">
          <HiOutlineLightBulb /> Quiz
          <span>6 Questions</span>
        </div>
      </div>
      <div className="intermediate">
        <h2 className="heading">Intermediate Level Course</h2>
        <p className="heading-desc">
          Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros
          id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat
          sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus,
          ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae
          nibh.
        </p>

        <div className="intro">
          <IoPlayCircleOutline /> Introduction of Editing
          <button>Preview</button>
          <span>10 Minutes</span>
        </div>
        <div className="overview">
          <IoPlayCircleOutline /> Overview of Editing
          <button>Preview</button>
          <span>10 Minutes</span>
        </div>
        <div className="quiz">
          <HiOutlineLightBulb /> Quiz
          <span>6 Questions</span>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
