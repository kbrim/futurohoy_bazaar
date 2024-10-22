import Image from "next/image";
import Grid from "@mui/material/Grid";
// LOCAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import { H5, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import {
  StyledCard,
  StyledQuote,
  StyledAvatar,
  StyledContent,
  StyledGridContainer,
} from "./styles";
// API FUNCTIONS
import api from "utils/__api__/grocery-2";

export default async function Section5() {
  const testimonials = await api.getTestimonials();

  if (!testimonials || !testimonials.length) return null;

  return (
    <div className="mb-3">
      <Carousel slidesToShow={1} spaceBetween={10}>
        {testimonials.map((data, ind) => (
          <StyledCard key={ind}>
            <StyledContent>
              <StyledQuote className="first" />

              <StyledGridContainer container spacing={1}>
                <Grid item xl={1} lg={2} md={3}>
                  <StyledAvatar>
                    <Image
                      fill
                      src={data.user.avatar}
                      alt="User"
                      sizes="(40px, 40px)"
                    />
                  </StyledAvatar>
                </Grid>

                <Grid item xl={8} lg={10} md={9}>
                  <Paragraph color="grey.700">{data.comment}</Paragraph>
                  <H5 mt={1} fontWeight="700">
                    {data.user.name}
                  </H5>
                </Grid>
              </StyledGridContainer>

              <StyledQuote className="last" />
            </StyledContent>
          </StyledCard>
        ))}
      </Carousel>
    </div>
  );
}
