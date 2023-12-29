import React from "react";
import instructor from "../../../assets/coursePage/instructor-1.jpg";

const Instructor = () => {
  return (
    <div className="course-detail-content-2">
      <img src={instructor} alt="" />
      <div className="name-design">
        <h2>Mitsuri</h2>
        <h3>PROJECT MANAGEER</h3>
        <p>
          Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros
          id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat
          sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus,
          ac dapibus dolor.
        </p>
      </div>
    </div>
  );
};

export default Instructor;
