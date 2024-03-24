import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import "../styles/header.css";

// Define a custom styled button with hover effect
const CustomButton = styled(Button)({
  color: "black",
  border: "3px solid black",
  marginTop: "20px",
  borderRadius: "20px",
  fontFamily: "Encode Sans Expanded",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#3f51b5", // Change the background color on hover
    color: "white", // Change the text color on hover
    border: "3px solid #3f51b5", // Change the border color on hover
  },
});

const Header = () => {
  return (
    <div className="header">
      <div className="text-body">
        <Typography variant="h3" gutterBottom style={{ fontFamily: "Encode Sans Expanded" , fontSize:"3.5rem"}}>
          Hello! My name is
        </Typography>
        <Typography
          variant="h1"
          component="div"
          style={{
            color: "#3f51b5",
            fontSize: "6rem",
            fontWeight: "bold",
            fontFamily: "Encode Sans Expanded",
            marginTop:"20px",
            marginBottom:"20px",
          }}
        >
          Shyam Sunder.
        </Typography>
        <Typography variant="h3" gutterBottom style={{ fontFamily: "Encode Sans Expanded" ,fontSize:"3.5rem"}}>
          I'm a software engineer.
        </Typography>
      </div>
      <div className="portfolio-button">
        <CustomButton href="#portfolio">
          View Portfolio
        </CustomButton>
      </div>
    </div>
  );
};

export default Header;
