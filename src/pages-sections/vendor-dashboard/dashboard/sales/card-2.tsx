import { PropsWithChildren } from "react";
import Card from "@mui/material/Card";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
// GLOBAL CUSTOM COMPONENTS
import FlexBox from "components/flex-box/flex-box";
import { H3, H6, Paragraph } from "components/Typography";

// =========================================================
interface Props extends PropsWithChildren {
  title: string;
  percentage: string;
  amount: string | number;
}
// =========================================================

export default function Card2({ children, title, amount, percentage }: Props) {
  return (
    <Card
      sx={{
        gap: 2,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <FlexBox py={3} pl={2.5} flexShrink={0} flexDirection="column">
        <H6 color="grey.600" mb={2}>
          {title}
        </H6>

        <div>
          <H3>{amount}</H3>

          <FlexBox mt={0.3} alignItems="center" color="info.main">
            <ArrowDropUp />
            <Paragraph fontSize={12}>{percentage}</Paragraph>
          </FlexBox>
        </div>
      </FlexBox>

      {children}
    </Card>
  );
}
