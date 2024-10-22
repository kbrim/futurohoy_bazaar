"use client";

import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENTS
export const RootStyled = styled(Card)(({ theme }) => ({
  height: "100%",
  ".img-wrapper": {
    height: "100%",
    minHeight: 700,
    display: "flex",
    position: "relative",
    img: { objectFit: "contain" },
    [theme.breakpoints.down("md")]: { minHeight: 400 },
    [theme.breakpoints.down(576)]: { minHeight: 300 },
  },
}));

export const ContentWrapper = styled("div")({
  display: "flex",
  padding: "1rem",
  paddingTop: "3rem",
  alignItems: "center",
  flexDirection: "column",
});

export const LinkText = styled("small")(({ theme }) => ({
  fontSize: 12,
  fontWeight: 900,
  lineHeight: 1.6,
  borderBottom: `2px solid ${theme.palette.primary.main}`,
}));
