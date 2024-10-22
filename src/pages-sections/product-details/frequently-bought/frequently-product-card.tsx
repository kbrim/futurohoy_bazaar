import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import HoverBox from "components/HoverBox";
import LazyImage from "components/LazyImage";
import { H6, Paragraph } from "components/Typography";
// CUSTOM UTILS LIBRARY FUNCTIONS
import { calculateDiscount, currency } from "lib";
// STYLED COMPONENTS
import { ItemCard, Price } from "./styles";

// =======================================================
interface Props {
  slug: string;
  price: number;
  title: string;
  imgUrl: string;
  id: string | number;
}
// =======================================================

export default function FrequentlyProductCard(props: Props) {
  const {
    imgUrl = "/assets/images/products/Rectangle 116.png",
    price,
    title,
    slug,
  } = props;

  return (
    <Link href={`/products/${slug}`}>
      <ItemCard>
        <HoverBox mb={1.5} borderRadius="8px">
          <LazyImage alt={title} width={500} height={500} src={imgUrl} />
        </HoverBox>

        <Paragraph title={title} mb={0.5} color="inherit" ellipsis>
          {title}
        </Paragraph>

        <Price>
          <H6 color="primary.main">{currency(price)}</H6>
          <del>{calculateDiscount(price, 35)}</del>
        </Price>
      </ItemCard>
    </Link>
  );
}
