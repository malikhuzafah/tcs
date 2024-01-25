import { Grid } from "@mui/material";
import React from "react";
import SustainabilityComponentItem from "./SustainabilityComponentItem";

const SustainabilityComponent = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Spotlight on Sustainability</h1>
        <div>
          <a className="sci-all" href="/">
            View All
          </a>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <SustainabilityComponentItem
            title={"Collegiate collaborations for climate"}
            tag={"Education"}
            img={
              "https://www.tcs.com/content/dam/global-tcs/en/images/home/insights-by-interest/collegiate-collaborations-climate.png/jcr:content/renditions/cq5dam.thumbnail.1280.765.png"
            }
            link="/"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SustainabilityComponentItem
            title={"Business balance green goals"}
            tag={"Enterprise"}
            img={
              "https://www.tcs.com/content/dam/global-tcs/en/images/home/insights-by-interest/businesses-balance-green-goals.png/jcr:content/renditions/cq5dam.thumbnail.1280.765.png"
            }
            link="/"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SustainabilityComponentItem
            title={"Path to people, planet and prosperity"}
            tag={"Techland way"}
            img={
              "https://www.tcs.com/content/dam/global-tcs/en/images/home/insights-by-interest/path-planet-people-prosperity.png/jcr:content/renditions/cq5dam.thumbnail.1280.765.png"
            }
            link="/"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SustainabilityComponent;
