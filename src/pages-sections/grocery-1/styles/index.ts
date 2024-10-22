"use client";

import styled from "@mui/material/styles/styled";

// USED IN ALL PRODUCTS & CAROUSELS COMPONENT
export const SubTitle = styled("p")(({ theme }) => ({
  fontSize: 13,
  marginTop: ".25rem",
  marginBottom: "20px",
  color: theme.palette.grey[600],
}));
