import Link from "next/link";
import Image from "next/image";
// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
// MUI ICON COMPONENTS
import Add from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";
import Remove from "@mui/icons-material/Remove";
// GLOBAL CUSTOM COMPONENTS
import { H6, Tiny } from "components/Typography";
import FlexBox from "components/flex-box/flex-box";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";
// CUSTOM DATA MODEL
import { CartItem } from "contexts/CartContext";

// ==============================================================
interface Props {
  item: CartItem;
  handleCartAmountChange: (amount: number, product: CartItem) => () => void;
}
// ==============================================================

export default function MiniCartItem({ item, handleCartAmountChange }: Props) {
  return (
    <FlexBox
      py={2}
      px={2.5}
      key={item.id}
      alignItems="center"
      borderBottom="1px solid"
      borderColor="divider"
    >
      <FlexBox alignItems="center" flexDirection="column">
        <Button
          size="small"
          color="primary"
          variant="outlined"
          onClick={handleCartAmountChange(item.qty + 1, item)}
          sx={{ height: 24, width: 24, borderRadius: 50 }}
        >
          <Add fontSize="small" />
        </Button>

        <H6 my="3px">{item.qty}</H6>

        <Button
          size="small"
          color="primary"
          variant="outlined"
          disabled={item.qty === 1}
          onClick={handleCartAmountChange(item.qty - 1, item)}
          sx={{ height: 24, width: 24, borderRadius: 50 }}
        >
          <Remove fontSize="small" />
        </Button>
      </FlexBox>

      <Link href={`/products/${item.id}`}>
        <Avatar variant="rounded" sx={{ mx: 1.5, width: 75, height: 75 }}>
          <Image alt={item.name} src={item.imgUrl} fill sizes="(75px, 75px)" />
        </Avatar>
      </Link>

      <Box
        flex="1"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        overflow="hidden"
        mr={2}
      >
        <Link href={`/products/${item.slug}`}>
          <H6 ellipsis className="title">
            {item.name}
          </H6>
        </Link>

        <Tiny color="grey.600">
          {currency(item.price)} x {item.qty}
        </Tiny>

        <H6 color="primary.main" mt={0.5}>
          {currency(item.qty * item.price)}
        </H6>
      </Box>

      <IconButton size="small" onClick={handleCartAmountChange(0, item)}>
        <Close fontSize="small" />
      </IconButton>
    </FlexBox>
  );
}
