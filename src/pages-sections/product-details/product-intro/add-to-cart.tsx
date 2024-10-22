"use client";

import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
// GLOBAL CUSTOM HOOK
import useCart from "hooks/useCart";
// GLOBAL CUSTOM COMPONENTS
import { H3 } from "components/Typography";
import { FlexBox } from "components/flex-box";
// CUSTOM DATA MODEL
import Product from "models/Product.model";

// ================================================================
type Props = { product: Product };
// ================================================================

export default function AddToCart({ product }: Props) {
  const { id, price, title, slug, thumbnail } = product;

  const { state, dispatch } = useCart();

  // CHECK PRODUCT EXIST OR NOT IN THE CART
  const cartItem = state.cart.find((item) => item.id === id);

  // HANDLE CHANGE CART
  const handleCartAmountChange = (amount: number) => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: { id, slug, price, qty: amount, name: title, imgUrl: thumbnail },
    });
  };

  if (!cartItem?.qty) {
    return (
      <Button
        color="primary"
        variant="contained"
        onClick={handleCartAmountChange(1)}
        sx={{ mb: 4.5, px: "1.75rem", height: 40 }}
      >
        Add to Cart
      </Button>
    );
  }

  return (
    <FlexBox alignItems="center" mb={4.5}>
      <Button
        size="small"
        sx={{ p: 1 }}
        color="primary"
        variant="outlined"
        onClick={handleCartAmountChange(cartItem?.qty - 1)}
      >
        <Remove fontSize="small" />
      </Button>

      <H3 fontWeight="600" mx={2.5}>
        {cartItem?.qty.toString().padStart(2, "0")}
      </H3>

      <Button
        size="small"
        sx={{ p: 1 }}
        color="primary"
        variant="outlined"
        onClick={handleCartAmountChange(cartItem?.qty + 1)}
      >
        <Add fontSize="small" />
      </Button>
    </FlexBox>
  );
}
