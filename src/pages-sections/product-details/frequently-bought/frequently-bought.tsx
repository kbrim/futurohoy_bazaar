import { Fragment } from "react";
import Button from "@mui/material/Button";
// GLOBAL CUSTOM COMPONENTS
import { H3, Span } from "components/Typography";
// LOCAL CUSTOM COMPONENT
import FrequentlyProductCard from "./frequently-product-card";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";
// CUSTOM DATA MODEL
import Product from "models/Product.model";
// STYLED COMPONENTS
import { Icon, StyledRoot, TotalCount } from "./styles";

// ============================================================
type Props = { products: Product[] };
// ============================================================

export default function FrequentlyBought({ products }: Props) {
  // IF NO PRODUCTS RETURN NULL
  if (!products || !products.length) return null;

  return (
    <StyledRoot>
      <H3 mb={3}>Frequently Bought Together</H3>

      <div className="content-wrapper">
        {products.map((item, ind) => (
          <Fragment key={item.id}>
            <FrequentlyProductCard
              id={item.id}
              key={item.id}
              slug={item.slug}
              price={item.price}
              title={item.title}
              imgUrl={item.thumbnail}
            />

            {ind < products.length - 1 && <Icon>+</Icon>}
          </Fragment>
        ))}

        <Icon>=</Icon>

        <TotalCount>
          <H3 color="primary.main">{currency(2500)}</H3>

          <Span mb={2} fontWeight="600" color="grey.600">
            Save {currency(500)}
          </Span>

          <div className="btn-wrapper">
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>

            <Button variant="outlined" color="primary">
              Add to List
            </Button>
          </div>
        </TotalCount>
      </div>
    </StyledRoot>
  );
}
