import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Favorite from "@mui/icons-material/Favorite";
// GLOBAL CUSTOM COMPONENT
import ProductCard1 from "components/product-cards/product-card-1";
// LOCAL CUSTOM COMPONENT
import Pagination from "../pagination";
import DashboardHeader from "../dashboard-header";
// CUSTOM DATA MODEL
import Product from "models/Product.model";

// ==================================================================
type Props = { totalPages: number; products: Product[] };
// ==================================================================

export default function WishListPageView({ products, totalPages }: Props) {
  return (
    <Fragment>
      {/* TOP HEADER AREA */}
      <DashboardHeader title="My Wish List" Icon={Favorite} />

      {/* PRODUCT LIST AREA */}
      <Grid container spacing={3}>
        {products.map((item) => (
          <Grid item lg={4} sm={6} xs={12} key={item.id}>
            <ProductCard1
              id={item.id}
              slug={item.slug}
              title={item.title}
              price={item.price}
              rating={item.rating}
              imgUrl={item.thumbnail}
              discount={item.discount}
            />
          </Grid>
        ))}
      </Grid>

      {/* PAGINATION AREA */}
      <Pagination count={totalPages} />
    </Fragment>
  );
}
