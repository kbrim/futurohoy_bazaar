import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";

export const CardRoot = styled(Card)(() => ({
  padding: "1.5rem",
  marginBottom: "2rem",
}));

export const FormWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "1fr 1fr",
  [theme.breakpoints.down("sm")]: { gridTemplateColumns: "1fr" },
}));
