"use client";

import { Fragment } from "react";
// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import styled from "@mui/material/styles/styled";
import Done from "@mui/icons-material/Done";
import { format } from "date-fns";
// CUSTOM ICON COMPONENTS
import Delivery from "icons/Delivery";
import PackageBox from "icons/PackageBox";
import TruckFilled from "icons/TruckFilled";
// GLOBAL CUSTOM COMPONENTS
import { Paragraph } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box";
// CUSTOM DATA MODEL
import { OrderStatus } from "models/Order.model";

// STYLED COMPONENTS
const StyledFlexbox = styled(FlexBetween)(({ theme }) => ({
  flexWrap: "wrap",
  marginTop: "2rem",
  marginBottom: "2rem",
  [theme.breakpoints.down("sm")]: { flexDirection: "column" },
  "& .line": {
    height: 4,
    minWidth: 50,
    flex: "1 1 0",
    [theme.breakpoints.down("sm")]: { flex: "unset", height: 50, minWidth: 4 },
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  top: -5,
  right: -5,
  width: 22,
  height: 22,
  position: "absolute",
  bgcolor: theme.palette.grey[200],
  color: theme.palette.success.main,
}));

// ==============================================================
interface Props {
  status: OrderStatus;
  deliveredAt: Date;
  isDelivered: boolean;
}
// ==============================================================

export default function OrderProgress({
  status,
  deliveredAt,
  isDelivered,
}: Props) {
  const STEP_ICONS = [PackageBox, TruckFilled, Delivery];
  const ORDER_STATUS_LIST = ["Pending", "Processing", "Delivered"];

  const statusIndex = ORDER_STATUS_LIST.indexOf(status);

  return (
    <Card sx={{ p: "2rem 1.5rem", mb: 4 }}>
      <StyledFlexbox>
        {STEP_ICONS.map((Icon, ind) => (
          <Fragment key={ind}>
            <Box position="relative">
              <Avatar
                alt="shipping"
                sx={{
                  width: 64,
                  height: 64,
                  color: ind <= statusIndex ? "white" : "primary.main",
                  bgcolor: ind <= statusIndex ? "primary.main" : "grey.300",
                }}
              >
                <Icon color="inherit" fontSize="large" />
              </Avatar>

              {ind < statusIndex ? (
                <StyledAvatar alt="done">
                  <Done color="inherit" sx={{ fontSize: 16 }} />
                </StyledAvatar>
              ) : null}
            </Box>

            {ind < STEP_ICONS.length - 1 ? (
              <Box
                className="line"
                bgcolor={ind < statusIndex ? "primary.main" : "grey.300"}
              />
            ) : null}
          </Fragment>
        ))}
      </StyledFlexbox>

      <FlexBox justifyContent={{ xs: "center", sm: "flex-end" }}>
        <Paragraph
          p="0.5rem 1rem"
          textAlign="center"
          borderRadius="300px"
          color="primary.main"
          bgcolor="primary.light"
        >
          Estimated Delivery Date{" "}
          <b>
            {isDelivered ? format(new Date(deliveredAt), "dd MMM yyyy") : "N/A"}
          </b>
        </Paragraph>
      </FlexBox>
    </Card>
  );
}