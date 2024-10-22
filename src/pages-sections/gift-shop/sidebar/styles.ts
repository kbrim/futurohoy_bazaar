"use client";

import Container from "@mui/material/Container";
import styled from "@mui/material/styles/styled";

import { layoutConstant } from "utils/constants";

export const SidebarContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  marginBottom: "2rem",
  ".sidenav": {
    top: 0,
    bottom: 0,
    position: "relative",
    transition: "all 350ms ease-in-out",
    width: layoutConstant.grocerySidenavWidth,
    minWidth: layoutConstant.grocerySidenavWidth,
    [theme.breakpoints.down("md")]: { display: "none" },
  },
  ".page-content": {
    left: "unset",
    position: "relative",
    marginLeft: "1.75rem",
    width: `calc(100% - 2.5rem - ${layoutConstant.grocerySidenavWidth}px)`,
    [theme.breakpoints.down("md")]: { width: "100%", marginLeft: 0 },
  },
}));
