import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
// GLOBAL CUSTOM COMPONENTS
import { H5 } from "components/Typography";
import { FlexBetween } from "components/flex-box";
// LOCAL CUSTOM COMPONENT
import DataListTable from "./table";
// API FUNCTIONS
import api from "utils/__api__/dashboard";
// DATA TYPES
import { RecentPurchased } from "./types";

// table column list
const tableHeading = [
  { id: "orderId", label: "Order ID", alignRight: false },
  { id: "product", label: "Product", alignRight: false },
  { id: "payment", label: "Payment", alignRight: false },
  { id: "amount", label: "Amount", alignCenter: true },
];

export default async function RecentPurchase() {
  const recentPurchase: RecentPurchased[] = await api.recentPurchase();

  return (
    <Card>
      <FlexBetween px={3} py={2.5}>
        <H5>Recent Purchases</H5>

        <Button size="small" color="info" variant="outlined">
          All Orders
        </Button>
      </FlexBetween>

      <DataListTable
        dataList={recentPurchase}
        tableHeading={tableHeading}
        type="RECENT_PURCHASE"
      />
    </Card>
  );
}
