import Image from "next/image";
// MUI
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
// GLOBAL CUSTOM COMPONENTS
import { FlexBetween, FlexBox } from "components/flex-box";
import { H3, H5, Paragraph, Small } from "components/Typography";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";
// CUSTOM DATA MODEL
import User from "models/User.model";
// API FUNCTIONS
import api from "utils/__api__/users";

// ==============================================================
type Props = { user: User };
// ==============================================================

export default async function UserAnalytics({ user }: Props) {
  const { balance, orderSummary, type } = await api.getUserAnalytics(user.id);

  return (
    <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
        <Card
          sx={{
            gap: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
            padding: "1rem 1.5rem",
          }}
        >
          <Avatar sx={{ height: 65, width: 65 }}>
            <Image
              fill
              alt={user.name.firstName}
              src={user.avatar}
              sizes="(65px, 65px)"
            />
          </Avatar>

          <FlexBetween flexWrap="wrap" flex={1}>
            <div>
              <H5>{`${user.name.firstName} ${user.name.lastName}`}</H5>

              <FlexBox alignItems="center" gap={1}>
                <Paragraph color="grey.600">Balance:</Paragraph>
                <Paragraph color="primary.main">{currency(balance)}</Paragraph>
              </FlexBox>
            </div>

            <Paragraph
              color="grey.600"
              letterSpacing={3}
              textTransform="uppercase"
            >
              {type}
            </Paragraph>
          </FlexBetween>
        </Card>
      </Grid>

      <Grid item container spacing={3} md={6} xs={12}>
        {orderSummary.map((item) => (
          <Grid item lg={3} sm={6} xs={6} key={item.subtitle}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "1rem 1.25rem",
              }}
            >
              <H3 color="primary.main" my={0} fontWeight={600}>
                {item.title}
              </H3>

              <Small color="grey.600" textAlign="center">
                {item.subtitle}
              </Small>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
