import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";

const Buttons = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#f8f9fa", boxShadow: "none", position: "sticky",
      top: "0", zIndex: "1000"}}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography className="logo" variant="h6" noWrap component="div" sx={{ color: "black" }}>
          <a href="#top">SS</a>
        </Typography>
        <ButtonGroup>
          <button className="head-buttons" >
            <a href="#portfolio">PORTFOLIO</a>
          </button>
          <button className="head-buttons">
            <a href="#about-me">ABOUT</a>
          </button>
          <button className="head-buttons">
            <a href="#resume">RESUME</a>
          </button>
          <button className="head-buttons">
            <a href="#contact">CONTACT</a>
          </button>
          <button className="head-buttons">
            <a href="https://github.com/Flanker-shyam/" target="_blank">GITHUB</a>
          </button>
          <button className="head-buttons">
            <a href="https://www.linkedin.com/in/shyam-sunder19/" target="_blank">LINKEDIN</a>
          </button>
          {/* Add more buttons as needed */}
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Buttons;
