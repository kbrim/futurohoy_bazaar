import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { Paragraph } from "components/Typography";
// STYLED COMPONENT
import { StyledRoot } from "./styles";

// ==================================================
interface Props {
  title: string;
  imgUrl: string;
  buttonLink: string;
  buttonText: string;
  description: string;
  buttonColor?: "dark" | "primary";
}
// ==================================================

export default function CarouselCard1({
  title,
  imgUrl,
  buttonLink,
  buttonText,
  description,
  buttonColor = "primary",
}: Props) {
  return (
    <StyledRoot>
      <Grid container spacing={3} alignItems="center">
        <Grid item className="grid-item" xl={4} md={5} sm={6} xs={12}>
          <h1 className="title">{title}</h1>
          <Paragraph color="secondary.main" mb={2.7}>
            {description}
          </Paragraph>

          <Button
            size="large"
            disableElevation
            href={buttonLink}
            color={buttonColor}
            variant="contained"
            className="button-link"
          >
            {buttonText}
          </Button>
        </Grid>

        <Grid item xl={8} md={7} sm={6} xs={12}>
          <div className="img-wrapper">
            <LazyImage
              fill
              src={imgUrl}
              alt={title}
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </div>
        </Grid>
      </Grid>
    </StyledRoot>
  );
}
