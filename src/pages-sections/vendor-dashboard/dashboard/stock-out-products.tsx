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
import { StockOut } from "./types";

// table column list
const tableHeading = [
  { id: "product", label: "Product", alignRight: false },
  { id: "stock", label: "Stock", alignRight: false },
  { id: "amount", label: "Amount", alignCenter: true },
];

export default async function StockOutProducts() {
  const stockOutProducts: StockOut[] = await api.stockOutProducts();

  return (
    <Card>
      <FlexBetween px={3} py={2.5}>
        <H5>Stock Out Products</H5>

        <Button size="small" color="info" variant="outlined">
          All Products
        </Button>
      </FlexBetween>

      <DataListTable
        dataList={stockOutProducts}
        tableHeading={tableHeading}
        type="STOCK_OUT"
      />
    </Card>
  );
}
