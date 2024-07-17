import React from "react";
import "./styles.css";

const Box = ({ icon, heading, paragraph, action }) => {
  return (
    <div className="box">
      <div className="content">
        <div className="icon-container">
          <span className="icon-border">{icon}</span>
        </div>
        <div className="boxText">
          <h2>{heading}</h2>
          <p className="bParagraph" style={{ textAlign: "start" }}>
            {paragraph}
          </p>
        </div>
        <p className="action underline" style={{ textAlign: "start" }}>
          {action}
        </p>
      </div>
    </div>
  );
};

export default Box;
