"use client";

import Grid from "@mui/material/Grid";
// GLOBAL CUSTOM COMPONENTS
import { H4, Paragraph } from "components/Typography";
import IconComponent from "components/IconComponent";
// CUSTOM DATA MODEL
import Service from "models/Service.model";
// STYLED COMPONENTS
import { IconBox, StyledRoot } from "./styles";

// ========================================================
type Props = { services: Service[] };
// ========================================================

export default function Section5({ services = [] }: Props) {
  const servicesData = services.slice(0, 3);

  return (
    <div className="mb-3">
      <Grid container spacing={3}>
        {servicesData.map((item, ind) => {
          return (
            <Grid item lg={4} md={4} sm={12} xs={12} key={ind}>
              <StyledRoot>
                <IconBox>
                  <IconComponent icon={item.icon} color="primary" />
                </IconBox>

                <div>
                  <H4 fontSize={16} fontWeight="700" color="primary.main">
                    {item.title}
                  </H4>

                  <Paragraph color="grey.600">{item.description}</Paragraph>
                </div>
              </StyledRoot>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
