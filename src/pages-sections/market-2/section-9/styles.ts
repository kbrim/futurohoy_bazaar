import styled from "@mui/material/styles/styled";

export const SectionHeader = styled("div")(() => ({
  gap: "1rem",
  flexWrap: "wrap",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "1.5rem",
  "& .button-group": {
    gap: ".5rem",
    display: "flex",
    flexWrap: "wrap",
    "& button": { flexGrow: 1 },
  },
}));
