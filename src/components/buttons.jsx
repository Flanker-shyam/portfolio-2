import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Buttons = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f8f9fa",
        boxShadow: "none",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          className="logo"
          variant="h6"
          noWrap
          component="div"
          sx={{ color: "black" }}
        >
          <a href="#top">SS</a>
        </Typography>
        <ButtonGroup
          sx={{
            display: { xs: "none", sm: "flex" }, // Show on larger screens
          }}
        >
          <button className="head-buttons">
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
          <button
            className="head-buttons"
            onClick={() =>
              window.open("https://github.com/Flanker-shyam/", "_blank")
            }
          >
            GITHUB
          </button>
          <button
            className="head-buttons"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/shyam-sunder19/",
                "_blank"
              )
            }
          >
            LINKEDIN
          </button>
        </ButtonGroup>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "block", sm: "none" , color:"black"} }} // Hide on larger screens
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ zIndex: 2000 }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="PORTFOLIO" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="ABOUT" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="RESUME" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="CONTACT" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://github.com/Flanker-shyam/"
            target="_blank"
          >
            <ListItemText primary="GITHUB" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://www.linkedin.com/in/shyam-sunder19/"
            target="_blank"
          >
            <ListItemText primary="LINKEDIN" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Buttons;