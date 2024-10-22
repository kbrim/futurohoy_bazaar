import Image from "next/image";
// GLOBAL CUSTOM COMPONENT
import { H6, Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { ImageWrapper, StyledRoot } from "./styles";

// ===================================================
interface Props {
  title: string;
  imgUrl: string;
  available: string;
}
// ===================================================

export default function CategoryCard({ imgUrl, title, available }: Props) {
  return (
    <StyledRoot>
      <ImageWrapper>
        <Image
          alt={title}
          width={800}
          height={200}
          src={imgUrl}
          style={{ width: "100%", objectFit: "contain" }}
        />
      </ImageWrapper>

      <H6 fontSize={15} mt="8px" mb="2px">
        {title}
      </H6>
      <Paragraph color="grey.600">{available}</Paragraph>
    </StyledRoot>
  );
}
