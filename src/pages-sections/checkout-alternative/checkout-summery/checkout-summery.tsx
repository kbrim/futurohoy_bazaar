"use client";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
// GLOBAL CUSTOM COMPONENTS
import { Paragraph, Span } from "components/Typography";
import FlexBetween from "components/flex-box/flex-between";
// GLOBAL CUSTOM HOOK
import useCart from "hooks/useCart";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";

export default function CheckoutSummary() {
  const { state } = useCart();

  return (
    <div>
      <Paragraph color="secondary.900" fontWeight={700} mb={2}>
        Your order
      </Paragraph>

      {state.cart.map(({ name, qty, price, id }) => (
        <FlexBetween mb={1.5} key={id}>
          <Paragraph>
            <Span fontWeight="700">{qty}</Span> x {name}
          </Paragraph>

          <Paragraph>{currency(price)}</Paragraph>
        </FlexBetween>
      ))}

      <Box component={Divider} borderColor="grey.300" my={3} />

      <ListItem title="Subtotal" value={2610} />
      <ListItem title="Shipping" />
      <ListItem title="Tax" value={40} />
      <ListItem title="Discount" mb={3} />

      <Box component={Divider} borderColor="grey.300" mb={1} />

      <ListItem title="Total" value={2650} color="inherit" />
    </div>
  );
}

function ListItem({
  title,
  mb = 0.5,
  value = 0,
  color = "grey.600",
}: {
  mb?: number;
  title: string;
  value?: number;
  color?: string;
}) {
  return (
    <FlexBetween mb={mb}>
      <Paragraph color={color}>{title}:</Paragraph>
      <Paragraph fontWeight="700">{value ? currency(value) : "-"}</Paragraph>
    </FlexBetween>
  );
}
