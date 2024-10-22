import Grid from "@mui/material/Grid";
// GLOBAL CUSTOM COMPONENTS
import { H4, Span } from "components/Typography";
import IconComponent from "components/IconComponent";
// STYLED COMPONENTS
import { ContentRoot, IconBox } from "./styles";
// API FUNCTIONS
import api from "utils/__api__/gift-shop";

export default async function Section2() {
  const services = await api.getServiceList();

  if (!services || !services.length) return null;

  return (
    <div>
      <Grid container spacing={3}>
        {services.map((item, ind) => {
          return (
            <Grid item md={4} sm={6} xs={12} key={ind}>
              <ContentRoot>
                <IconBox>
                  <IconComponent icon={item.icon} color="primary" />
                </IconBox>

                <div>
                  <H4 mb={0.5} fontSize="1rem" fontWeight="600">
                    {item.title}
                  </H4>
                  <Span color="grey.600">{item.description}</Span>
                </div>
              </ContentRoot>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
