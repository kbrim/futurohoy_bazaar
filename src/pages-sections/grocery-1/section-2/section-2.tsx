import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H4, Span } from "components/Typography";
import IconComponent from "components/IconComponent";
// STYLED COMPONENT
import { ServiceCard } from "./styles";
// API FUNCTIONS
import api from "utils/__api__/grocery-1";

export default async function Section2() {
  const services = await api.getServices();

  if (!services || !services.length) return null;

  return (
    <Container className="pt-5 pb-5">
      <Grid container spacing={3}>
        {services.slice(0, 4).map((item) => {
          return (
            <Grid item lg={3} md={6} sm={6} xs={12} key={item.title}>
              <ServiceCard>
                <IconComponent icon={item.icon} fontSize="large" />

                <div>
                  <H4 color="grey.900" fontSize="1rem" fontWeight="700">
                    {item.title}
                  </H4>

                  <Span color="grey.600">{item.description}</Span>
                </div>
              </ServiceCard>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
