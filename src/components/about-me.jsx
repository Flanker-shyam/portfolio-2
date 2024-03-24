import React from "react";
import { Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <div id="about-me" style={{ backgroundColor: "#f8f9fa" }}>
      <h2 style={{ fontSize: "50px", marginTop: "0px" }}>About Me</h2>
      <div className="about-me">
        <div className="left-box">
          <img
            className="profile-img"
            style={{ height: "400px" }}
            src="/profile2.png"
          ></img>
        </div>
        <div className="right-box">
          <div className="about-me-content">
            <Typography variant="body1" paragraph>
              I am a passionate software engineer hailing from India, with a
              Master's degree in Computer Applications from NIT Jamshedpur. My
              expertise spans across various domains including full-stack
              development, machine learning, network security, and DevOps.
            </Typography>
            <Typography variant="body1" paragraph>
              With a fervent enthusiasm for learning, I have embarked on
              numerous projects encompassing these diverse technological stacks.
              I thrive on crafting high-quality software solutions that hold the
              potential to make a significant impact on people's lives.
            </Typography>
            <Typography variant="body1" paragraph>
              Eager to contribute to meaningful projects and driven by
              innovation, I am dedicated to pushing the boundaries of what
              technology can achieve. Let's collaborate and build something
              remarkable together!
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
