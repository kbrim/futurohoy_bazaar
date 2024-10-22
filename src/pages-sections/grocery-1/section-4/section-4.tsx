import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
import FlexRowCenter from "components/flex-box/flex-row-center";
import { ProductCard4 } from "components/product-cards/product-card-4";
// CUSTOM DATA MODEL
import Product from "models/Product.model";
// STYLED COMPONENT
import { SubTitle } from "../styles";

// ========================================================
type Props = { products: Product[]; title?: string };
// ========================================================

export default function AllProducts({
  products,
  title = "All Products",
}: Props) {
  return (
    <div className="mb-3" id="products">
      <H2 lineHeight={1}>{title}</H2>
      <SubTitle>
        Best collection in {new Date().getFullYear()} for you!
      </SubTitle>

      <Grid container spacing={3}>
        {products.map((item) => (
          <Grid key={item.id} item xl={3} md={4} sm={6} xs={12}>
            <ProductCard4
              id={item.id}
              slug={item.slug}
              title={item.title}
              price={item.price}
              off={item.discount}
              rating={item.rating}
              imgUrl={item.thumbnail}
            />
          </Grid>
        ))}
      </Grid>

      <FlexRowCenter mt={6}>
        <Button variant="contained" color="primary" sx={{ fontSize: 13 }}>
          Load More...
        </Button>
      </FlexRowCenter>
    </div>
  );
}
