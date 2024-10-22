import { useState } from "react";
import Avatar from "@mui/material/Avatar";
// MUI ICON COMPONENT
import Delete from "@mui/icons-material/Delete";
// GLOBAL CUSTOM COMPONENTS
import BazaarSwitch from "components/BazaarSwitch";
import FlexBox from "components/flex-box/flex-box";
import { Paragraph, Small } from "components/Typography";
// STYLED COMPONENTS
import { StyledIconButton, StyledTableCell, StyledTableRow } from "../styles";
import Image from "next/image";

// ========================================================================
interface Review {
  customer: string;
  product: string;
  comment: string;
  published: boolean;
  productImage: string;
}

type Props = { review: Review };
// ========================================================================

export default function ReviewRow({ review }: Props) {
  const { customer, product, comment, published, productImage } = review;

  const [productPublish, setProductPublish] = useState(published);

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar variant="rounded">
            <Image fill alt={product} src={productImage} sizes="(100%, 100%)" />
          </Avatar>

          <Paragraph fontWeight={600}>{product}</Paragraph>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="left">{customer}</StyledTableCell>

      <StyledTableCell align="left">
        <Small>{comment}</Small>
      </StyledTableCell>

      <StyledTableCell align="left">
        <BazaarSwitch
          color="info"
          checked={productPublish}
          onChange={() => setProductPublish((state: boolean) => !state)}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
}
