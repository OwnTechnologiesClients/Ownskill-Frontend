import React from "react";
import "./Members.scss";
import teamBg from "../../../assets/member/team-bg-1.png";
import teamMember from "../../../assets/member/team-1-2.jpg";
const Members = () => {
  return (
    <div className="members-section">
      <img src={teamBg} alt="" />
      <h4>Team Member</h4>
      <h2>Meet Our Professional Team Members</h2>

      <div className="member-cards">
        <div className="card">
          <div className="box"></div>
          <img src={teamMember} alt="" />
          <div className="overlay">
            <h2>Devon Millie</h2>
            <h4>UI/UX developer</h4>
          </div>
        </div>
        <div className="card">
          <div className="box"></div>
          <img src={teamMember} alt="" />
          <div className="overlay">
            <h2>Devon Millie</h2>
            <h4>UI/UX developer</h4>
          </div>
        </div>
        <div className="card">
          <div className="box"></div>
          <img src={teamMember} alt="" />
          <div className="overlay">
            <h2>Devon Millie</h2>
            <h4>UI/UX developer</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
