import { Container } from "@mui/material";
import React from "react";

const Difference = () => {
  return (
    <div>
      <h1>Discover Techland difference</h1>
      <div
        style={{
          height: "90vh",
          backgroundImage:
            'linear-gradient(81deg, rgba(0,0,0,0.75) 23%, rgba(0,0,0,0.3) 100%),url("/assets/difference.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#ffffff",
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
    </div>
  );
};

export default Difference;
