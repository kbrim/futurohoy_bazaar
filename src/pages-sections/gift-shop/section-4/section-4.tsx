import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
import { Carousel } from "components/carousel";
// LOCAL CUSTOM COMPONENT
import CategoryCard from "./category-card";
// COMMON CAROUSEL STYLES
import { CAROUSEL_ARROW_STYLE } from "../styles";
// API FUNCTIONS
import api from "utils/__api__/gift-shop";

export default async function Section4() {
  const categories = await api.getTopCategories();

  if (!categories || !categories.length) return null;

  const responsive = [
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } },
  ];

  return (
    <div className="mt-2">
      <H2 mb={2}>Top Categories</H2>

      <Carousel
        slidesToShow={3}
        responsive={responsive}
        arrowStyles={CAROUSEL_ARROW_STYLE}
      >
        {categories.map((item, ind) => (
          <Link href="/" key={ind}>
            <CategoryCard
              title={item.name}
              imgUrl={item.image}
              available={item.description}
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
