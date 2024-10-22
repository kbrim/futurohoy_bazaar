// GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
import { Carousel } from "components/carousel";
import { ProductCard4 } from "components/product-cards/product-card-4";
// CUSTOM DATA MODEL
import Product from "models/Product.model";
// STYLED COMPONENT
import { SubTitle } from "../styles";

// =================================================================
type Props = { title: string; products: Product[] };
// =================================================================

export default function ProductCarousel({ products, title }: Props) {
  const responsive = [
    { breakpoint: 1440, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } },
  ];

  return (
    <div className="mb-3">
      <H2 lineHeight={1}>{title}</H2>
      <SubTitle>
        Best collection in {new Date().getFullYear()} for you!
      </SubTitle>

      <Carousel
        responsive={responsive}
        slidesToShow={4}
        arrowStyles={{
          width: 30,
          height: 30,
          boxShadow: 2,
          borderRadius: 1,
          background: "white",
          color: "primary.main",
          transition: "all 0.4s ease",
        }}
      >
        {products.map((item) => (
          <div className="pb-1" key={item.id}>
            <ProductCard4
              id={item.id}
              slug={item.slug}
              title={item.title}
              price={item.price}
              off={item.discount}
              rating={item.rating}
              imgUrl={item.thumbnail}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
