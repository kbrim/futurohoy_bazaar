import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
// FORMIK
import { useFormikContext } from "formik";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { Paragraph } from "components/Typography";
// CUSTOM DATA MODEL
import { InitialValues } from "../_types";
import { PaymentCard } from "models/Common";

// ==============================================================
type Props = { cards: PaymentCard[] };
// ==============================================================

export default function CardList({ cards }: Props) {
  const { values, setFieldValue } = useFormikContext<InitialValues>();

  const handleCardToggle = (cardNo: string) => {
    if (values.card === cardNo) setFieldValue("card", "");
    else setFieldValue("card", cardNo);
  };

  return (
    <Box mb={3}>
      <Paragraph mb={1.5}>Saved Cards</Paragraph>

      <Grid container spacing={3}>
        {cards.map((item) => (
          <Grid item md={4} sm={6} xs={12} key={item.last4Digits}>
            <Card
              onClick={() => handleCardToggle(item.last4Digits)}
              sx={{
                padding: 2,
                boxShadow: "none",
                cursor: "pointer",
                border: "1px solid",
                backgroundColor: "grey.100",
                borderColor:
                  item.last4Digits === values.card
                    ? "primary.main"
                    : "transparent",
              }}
            >
              <Box height={24} width={36} position="relative" mb={1}>
                <LazyImage
                  fill
                  alt={item.name}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src={`/assets/images/payment-methods/${item.cardType}.svg`}
                />
              </Box>

              <Paragraph color="grey.700">
                **** **** **** {item.last4Digits}
              </Paragraph>
              <Paragraph color="grey.700">{item.name}</Paragraph>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
