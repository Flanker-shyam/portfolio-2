import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            margin: "10px 0",
            width: "400px",
          },
        },
      },
    },
  });

const ContactForm = () => {
  const outerTheme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="contact-form">
      <h2 style={{fontSize:"50px"}}>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField label="Name" variant="standard" />
            <TextField label="Email" variant="standard" />
            <TextField label="Message" variant="standard" multiline rows={4} />
            <Button
              variant="outlined"
              href="#"
              style={{
                color: "#3f51b5",
                borderColor: "#3f51b5",
                borderWidth: "2px",
                marginTop: "20px",
                borderRadius: "20px",
                fontFamily: "Encode Sans Expanded",
                fontWeight: "bold",
              }}
            >
              Submit
            </Button>
          </ThemeProvider>
        </Box>
      </form>
    </div>
  );
};

export default ContactForm;
