import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomerButton = styled(Button)({
  color: "black",
  border: "3px solid black",
  marginTop: "20px",
  borderRadius: "20px",
  fontFamily: "Encode Sans Expanded",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#3f51b5",
    color: "white",
    border: "3px solid #3f51b5",
  },
});

export default function Resume() {
  return (
    <div
      id="resume"
      className="resume"
      style={{
        marginTop: "30px",
        backgroundColor: "#f8f9fa",
        marginTop: "0px",
        padding: "50px",
      }}
    >
      <h2 style={{ margin: "0px" }}>Resume</h2>
      <div className="resume-buttons">
        <CustomerButton
          variant="outlined"
          href="https://drive.google.com/file/d/1uhQw5fM8mxfRVaFaqA3aoUiErXgjzRaf/view?usp=drive_link"
          target="_blank"
          style={{marginRight: "10px"}}
        >View Resume
        </CustomerButton>
        <CustomerButton
          variant="outlined"
          href="https://drive.google.com/file/d/1uhQw5fM8mxfRVaFaqA3aoUiErXgjzRaf/view?usp=drive_link"
          download
          style={{marginLeft: "10px"}}
        >
            Download Resume

        </CustomerButton>
      </div>
    </div>
  );
}
