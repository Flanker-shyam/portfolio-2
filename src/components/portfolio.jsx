import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import PortfolioCard from "../components/cards";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function PortfolioStack() {
  return (
    <div id="portfolio" style={{ backgroundColor: "#f8f9fa" ,paddingTop:"100px"}}>
      <h2 style={{ marginTop: "0px" }}>Portfolio</h2>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2}>
          <PortfolioCard
            header={"Shortify"}
            subheader={"March 2023"}
            description={`Introducing "Shortify": a sophisticated URL shortening service built with Nest.js and TypeScript. Shortify offers advanced analytics capabilities, empowering users to track click-through rates, geographic distribution, and referral sources. With its robust backend system, Shortify ensures reliability, efficiency, and scalability, even under heavy traffic loads. Simplify your link management and gain valuable insights with Shortify.`}
            body={`A sophisticated URL shortening service built with Nest.js and TypeScript.`}
            media={"/projects/url-shortner.png"}
            techStack={"NestedJs, TypeScript, PostgreSQL, Docker, Redis"}
            url={"https://github.com/Flanker-shyam/Shortify"}
          />
          <PortfolioCard
            header={"DrawSync"}
            subheader={"March 2024"}
            description={`Dive into a seamless experience where users can unleash their creativity by effortlessly drawing shapes, adding text, and collaborating in real-time with their team members. With DrawSync, users can seamlessly create new sessions or join existing ones, fostering a dynamic environment for teamwork and brainstorming. Leveraging the robust WebSocket technology, DrawSync ensures instant synchronization of actions across all connected devices, enabling fluid collaboration and smooth interaction. Embrace the future of digital collaboration with DrawSync, where creativity knows no bounds and teamwork knows no limits.`}
            body={` an innovative collaborative whiteboard application crafted with React, TypeScript, and the powerful Fabric.js library.`}
            media={"/projects/drawsync.png"}
            techStack={"ReactJs, Typescript, FabricJs, WebSocket"}
            url={"https://github.com/Flanker-shyam/DrawSync"}
          />
          <PortfolioCard
            header={"Netforensix"}
            subheader={"Dec 2023"}
            description={`NetForensix is a powerful and intelligent network intrusion detection tool designed to bolster your network's security by identifying various network attacks. By analyzing network flow behavior, this tool can detect and provide insights into attacks such as Brute Force FTP, Brute Force SSH, DoS, Web Attacks, Botnets, DDoS, and more. Leveraging the CICIDS2017 dataset from Kaggle, NetForensix offers a robust solution for network forensics and intrusion detection.`}
            body={`NetForensix is a powerful and intelligent network intrusion detection tool designed to bolster your network's security by identifying various network attacks.`}
            media={"/projects/net-forensix.png"}
            techStack={
              "Python, Sci-kit learn, Feature Selection Wireshark, Pyshark"
            }
            url={"https://github.com/Flanker-shyam/NetForensix"}
          />
          <PortfolioCard
            header={"MovieMagnet"}
            subheader={"May 2023"}
            description={`Welcome to MovieMagnet, the Movies Rental Website API project! MovieMagnet serves as the backbone for a user-friendly movie rental website, offering seamless access to extensive movie information. Users can effortlessly search for movies, access detailed information, and contribute to the database by adding new entries. This API interacts with a comprehensive movie database, providing a smooth and efficient experience for users seeking their favorite films or exploring new releases. With MovieMagnet, discovering and renting movies has never been easier.`}
            body={`MovieMagnet serves as the backbone for a user-friendly movie rental website.`}
            media={"/projects/movie-rental.png"}
            techStack={"Nodejs, Express, MongoDB, Mongoose, JWT"}
            url={"https://github.com/Flanker-shyam/MovieMagnet"}
          />
        </Stack>
      </Box>
    </div>
  );
}
