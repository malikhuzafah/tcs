import { Container } from "@mui/material";
import React from "react";
import "./Home.css";
import SustainabilityComponent from "../../components/Home/SustainabilityComponent";
import Difference from "../../components/Home/Difference";
import BeliefInAction from "../../components/Home/BeliefInAction";

const Home = () => {
  return (
    <div>
      <div
        style={{
          height: "90vh",
          backgroundImage:
            'linear-gradient(81deg, rgba(0,0,0,0.75) 23%, rgba(0,0,0,0.3) 100%),url("/assets/home.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#ffffff",
          paddingTop: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Container>
          <h1>Techland at the World Economic Forum 2024</h1>
          <p>The future is AI. The future is Human.</p>
          <button className="btn btn-primary">Discover More</button>
        </Container>
      </div>
      <Container>
        <SustainabilityComponent />
        <Difference />
        <BeliefInAction />
      </Container>
    </div>
  );
};

export default Home;
