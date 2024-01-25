import { Grid } from "@mui/material";
import React from "react";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

const BeliefInAction = () => {
  return (
    <div>
      <h1>Belief in action</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div
            style={{
              height: "400px",
              backgroundImage: 'url("/assets/bia1.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <div>
              <h1>A new, nimble NWC</h1>
              <p>
                Saudi Arabia’s National Water Company consolidates and
                transforms comprehensively
              </p>
              <a className="sci-link" href="/">
                <DocumentScannerIcon sx={{ fontSize: 20 }} /> Read More
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div
            style={{
              height: "400px",
              backgroundImage: 'url("/assets/bia2.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <div>
              <h1>Gaining momentum with AI</h1>
              <p>
                South-African insurer Momentum Metropolitan delivers chatbot
                service automation and better CX
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div
            style={{
              height: "400px",
              backgroundImage: 'url("/assets/bia3.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <div>
              <h1>Kautex kickstarts automation</h1>
              <p>
                German automotive supplier develops end-to-end software
                capability
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default BeliefInAction;
