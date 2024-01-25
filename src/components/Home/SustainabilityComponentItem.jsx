import { Chip } from "@mui/material";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import React from "react";

const SustainabilityComponentItem = ({ tag, title, link, img }) => {
  return (
    <div
      style={{
        height: "440px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: `url(${img})`,
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      <div>
        <Chip
          variant="filled"
          label={tag}
          style={{
            backgroundColor: "#ffffff",
          }}
        />
      </div>
      <div
        style={{
          color: "#ffffff",
        }}
      >
        <h2>{title}</h2>
        <a className="sci-link" href={link}>
          <DocumentScannerIcon sx={{ fontSize: 20 }} /> Read More
        </a>
      </div>
    </div>
  );
};

export default SustainabilityComponentItem;
