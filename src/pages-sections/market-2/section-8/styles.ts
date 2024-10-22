"use client";

import styled from "@mui/material/styles/styled";

export const StyledContent = styled("div")(() => ({
  padding: "2rem",
  backgroundColor: "white",
  "& .slick-slide": {
    textAlign: "center",
  },
  "& .brand-item": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    margin: "auto",
    maxWidth: 110,
    height: 50,

    "& img": {
      filter: "grayscale(1)",
      objectFit: "contain",
    },
  },
}));
