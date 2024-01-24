import React from "react";
import "./index.css";
import Text from "../Text";
const index = ({ aboutRef }) => {
  return (
    <div className="about" id="about" ref={aboutRef}>
      <h1>
        <Text text="about us" />{" "}
      </h1>
      <br />
      <br />

      <div className="align">
        <div className="left">
          <h2>Our Mission</h2>
          <br />
          <br />
          <div className="desc">
            <p>We are an architecture studio in a twist!</p>
            <p>Our mission is to spread awareness about natural</p>
            <p>building through our work and build a community while</p>
            <p>we are at it.</p>
          </div>
        </div>
        <div className="right">
          hello
        </div>
      </div>
    </div>
  );
};

export default index;
