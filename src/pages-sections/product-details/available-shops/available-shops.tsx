import Link from "next/link";
import Image from "next/image";
// MUI
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
// GLOBAL CUSTOM COMPONENTS
import { H3 } from "components/Typography";
// STYLED COMPONENTS
import { StyledCard } from "./styles";
// API FUNCTIONS
import { getAvailableShops } from "utils/__api__/shop";

export default async function AvailableShops() {
  const shops = await getAvailableShops();

  // IF NO SHOPS RETURN NULL
  if (!shops || !shops.length) return null;

  return (
    <div className="mb-4">
      <H3 mb={3}>Also Available at</H3>

      <Grid container spacing={4}>
        {shops.map(({ imgUrl, name, url }) => (
          <Grid item lg={2} md={3} sm={4} xs={12} key={name}>
            <Link href={url}>
              <StyledCard>
                <Avatar className="shop-avatar">
                  <Image alt={name} src={imgUrl} fill sizes="(48px 48px)" />
                </Avatar>

                <p className="shop-name">{name}</p>
              </StyledCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
