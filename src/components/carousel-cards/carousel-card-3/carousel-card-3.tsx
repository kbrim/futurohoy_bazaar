import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H2, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { ContentWrapper, LinkText, RootStyled } from "./styles";

// ==========================================================
interface Props {
  url: string;
  title: string;
  imgUrl: string;
  buttonText: string;
  description: string;
}
// ==========================================================

export default function CarouselCard3({
  buttonText,
  description,
  imgUrl,
  title,
  url,
}: Props) {
  return (
    <RootStyled elevation={0}>
      <ContentWrapper>
        <H2 mb="0.5rem" textAlign="center" lineHeight={1.2}>
          {title}
        </H2>

        <Paragraph color="grey.600" textAlign="center" mb="1.5rem">
          {description}
        </Paragraph>

        <Link href={url}>
          <LinkText>{buttonText}</LinkText>
        </Link>
      </ContentWrapper>

      <div className="img-wrapper">
        <LazyImage
          fill
          src={imgUrl}
          alt={title}
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>
    </RootStyled>
  );
}
