import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import ShopCard from "../shop-card";
import ShopPagination from "../shop-pagination";
// GLOBAL CUSTOM COMPONENTS
import { H2 } from "components/Typography";
// CUSTOM DATA MODEL
import Shop from "models/Shop.model";

// =============================================
interface Props {
  shops: Shop[];
  totalShops: number;
  totalPages: number;
  firstIndex: number;
  lastIndex: number;
}
// =============================================

export default function ShopsPageView({
  totalShops,
  totalPages,
  firstIndex,
  lastIndex,
  shops,
}: Props) {
  return (
    <Container className="mt-2 mb-3">
      <H2 mb={3}>All Shops</H2>

      {/* ALL SHOP LIST AREA */}
      <Grid container spacing={3}>
        {shops.map((item) => (
          <Grid item lg={4} sm={6} xs={12} key={item.id}>
            <ShopCard
              name={item.name}
              slug={item.slug}
              phone={item.phone}
              address={item.address}
              coverPicture={item.coverPicture}
              profilePicture={item.profilePicture}
            />
          </Grid>
        ))}
      </Grid>

      {/* PAGINATION AREA */}
      <ShopPagination
        lastIndex={lastIndex}
        firstIndex={firstIndex}
        totalPages={totalPages}
        totalShops={totalShops}
      />
    </Container>
  );
}
