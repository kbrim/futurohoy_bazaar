"use client";

import styled from "@mui/material/styles/styled";

// STYLED COMPONENTS
export const StyledRoot = styled("div")(({ theme }) => ({
  textAlign: "center",
  transition: "all 0.3s",
  "&:hover": { "& h6": { color: theme.palette.primary.main } },
}));

export const ImageWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  padding: "0 40px 20px 40px",
  background: theme.palette.primary[100],
}));
