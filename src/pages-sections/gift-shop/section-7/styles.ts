"use client";

import styled from "@mui/material/styles/styled";

export const RootStyle = styled("div")(({ theme }) => ({
  minHeight: 400,
  display: "flex",
  overflow: "hidden",
  position: "relative",
  ".banner": { objectFit: "cover" },
  ".content": {
    right: 0,
    top: "50%",
    left: "50%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    ".MuiButton-root": { padding: ".75rem 2rem", borderRadius: 0 },
  },
  [theme.breakpoints.down("sm")]: { minHeight: 330 },
}));
