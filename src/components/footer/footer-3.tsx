import { ReactNode } from "react";
// MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// ==============================================================
interface ChildrenProps {
  children: ReactNode;
}
// ==============================================================

export default function Footer4({ children }: ChildrenProps) {
  return (
    <Box component="footer" bgcolor="white" pt={12}>
      <Container>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </Container>
    </Box>
  );
}

Footer4.Brand = function ({ children }: ChildrenProps) {
  return (
    <Grid item lg={4} md={4} sm={6} xs={12}>
      {children}
    </Grid>
  );
};

Footer4.Widget1 = function ({ children }: ChildrenProps) {
  return (
    <Grid item lg={2} md={2} sm={6} xs={12}>
      {children}
    </Grid>
  );
};

Footer4.Widget2 = function ({ children }: ChildrenProps) {
  return (
    <Grid item lg={3} md={3} sm={6} xs={12}>
      {children}
    </Grid>
  );
};

Footer4.Contact = function ({ children }: ChildrenProps) {
  return (
    <Grid item lg={3} md={3} sm={6} xs={12}>
      {children}
    </Grid>
  );
};
