import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import Card3 from "../section-3/card/card-3";
// API FUNCTIONS
import api from "utils/__api__/gadget-1";

export default async function Section5() {
  const [first, second] = await api.getNewArrival();

  return (
    <Container className="mt-4">
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <Card3
            title={first.title}
            imgUrl={first.thumbnail}
            body="Easy payment policy, 12 months 0% in interest."
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <Card3
            color="white"
            bgColor="grey.600"
            title={second.title}
            imgUrl={second.thumbnail}
            body="Easy payment policy, 12 months 0% in interest."
          />
        </Grid>
      </Grid>
    </Container>
  );
}
