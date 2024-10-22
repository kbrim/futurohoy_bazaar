import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H4, Span } from "components/Typography";
import IconComponent from "components/IconComponent";
// STYLED COMPONENTS
import { StyledRoot, ServiceItem } from "./styles";
// API FUNCTIONS
import api from "utils/__api__/market-2";

export default async function Section2() {
  const services = await api.getServices();

  if (!services || !services.length) return null;

  return (
    <Container className="mt-2">
      <StyledRoot>
        {services.map((item, ind) => (
          <ServiceItem key={ind}>
            <IconComponent icon={item.icon} sx={{ fontSize: 40 }} />

            <div>
              <H4 lineHeight={1.3}>{item.title}</H4>
              <Span color="grey.600">{item.description}</Span>
            </div>
          </ServiceItem>
        ))}
      </StyledRoot>
    </Container>
  );
}
