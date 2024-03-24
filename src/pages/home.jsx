import React,{useEffect} from "react";
import Container from "@mui/material/Container";
import Header from "../components/header";
import "../styles/home.css";
import Buttons from "../components/buttons";
import PortfolioStack from "../components/portfolio";
import Footer from "../components/footer";
import AboutMe from "../components/about-me";
import TechStacks from "../components/tech-stacks";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from '../components/resume';

const Home = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
      useEffect(() => {
        AOS.refresh();
      });
  return (
    <div className="home" style={{ backgroundColor: "#f8f9fa" }}>
      <Container
        maxWidth="false"
        disableGutters
        className="head"
        style={{ fontFamily: "Poppins" }}
      >
        <Buttons />
        <Header />
        <AboutMe />
        <PortfolioStack />
        <TechStacks />
        <Resume />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
