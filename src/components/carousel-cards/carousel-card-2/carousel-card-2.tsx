import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// MUI ICON COMPONENT
import Favorite from "@mui/icons-material/Favorite";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { Countdown } from "components/countdown";
import FlexBox from "components/flex-box/flex-box";
import { H2, H3, H4, Paragraph } from "components/Typography";
// STYLED COMPONENT
import { ContentWrapper, FavoriteButton, ImageWrapper } from "./styles";

// ================================================================
interface Props {
  imgUrl: string;
  expireDate: number;
  buttonText: string;
  productName: string;
  offerName: string;
  offerTagline: string;
  offerDescription: string;
}
// ================================================================

export default function CarouselCard2({
  imgUrl,
  productName,
  expireDate,
  buttonText,
  offerName,
  offerTagline,
  offerDescription,
}: Props) {
  return (
    <Grid container alignItems="center">
      <Grid item lg={6} md={5} sm={12} xs={12}>
        <ImageWrapper>
          <LazyImage
            fill
            src={imgUrl}
            alt={productName}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </ImageWrapper>
      </Grid>

      <Grid item lg={4} md={5} sm={12} xs={12}>
        <ContentWrapper>
          <H3 color="primary.500" mb="0.2rem">
            {offerName}
          </H3>

          <H2>{productName}</H2>
          <Paragraph mt="0.3rem">{offerDescription}</Paragraph>

          <H4 mt="1.5rem" mb="0.3rem">
            {offerTagline}
          </H4>

          {/* countdown time */}
          <Countdown expireDate={expireDate} />

          <FlexBox gap={2} mt={3} alignItems="center">
            <Button
              size="large"
              color="primary"
              disableElevation
              variant="contained"
              sx={{ borderRadius: 2 }}
            >
              {buttonText}
            </Button>

            <FavoriteButton>
              <Favorite />
            </FavoriteButton>
          </FlexBox>
        </ContentWrapper>
      </Grid>
    </Grid>
  );
}
