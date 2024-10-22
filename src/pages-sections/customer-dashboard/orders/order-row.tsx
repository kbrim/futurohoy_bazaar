import Link from "next/link";
// MUI
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import East from "@mui/icons-material/East";
import { format } from "date-fns";
// GLOBAL CUSTOM COMPONENT
import { H5, Paragraph } from "components/Typography";
// LOCAL CUSTOM COMPONENT
import TableRow from "../table-row";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";
// CUSTOM DATA MODEL
import Order from "models/Order.model";

// =================================================
type Props = { order: Order };
// =================================================

export default function OrderRow({ order }: Props) {
  const getColor = (status: string) => {
    if (status === "Pending") return "secondary";
    else if (status === "Processing") return "info";
    else if (status === "Delivered") return "success";
    else if (status === "Cancelled") return "error";
    else return "default";
  };

  return (
    <Link href={`/orders/${order.id}`}>
      <TableRow sx={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr" }}>
        <H5 ellipsis>#{order.id.substring(0, 18)}</H5>

        <Box textAlign="center">
          <Chip
            size="small"
            label={order.status}
            color={getColor(order.status)}
          />
        </Box>

        <Paragraph textAlign={{ sm: "center", xs: "left" }}>
          {format(new Date(order.createdAt), "MMM dd, yyyy")}
        </Paragraph>

        <Paragraph textAlign="center">{currency(order.totalPrice)}</Paragraph>

        <Box justifyContent="end" display={{ sm: "inline-flex", xs: "none" }}>
          <IconButton>
            <East className="east" fontSize="small" />
          </IconButton>
        </Box>
      </TableRow>
    </Link>
  );
}
