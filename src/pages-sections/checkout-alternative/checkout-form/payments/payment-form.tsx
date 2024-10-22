import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
// FORMIK
import { useFormikContext } from "formik";
import { withMask } from "use-mask-input";
// GLOBAL CUSTOM COMPONENTS
import { Paragraph } from "components/Typography";
// CUSTOM DATA MODEL
import { InitialValues } from "../_types";

export default function PaymentForm() {
  const { values, errors, touched, handleChange } =
    useFormikContext<InitialValues>();

  return (
    <Box mb={3}>
      <Paragraph mb={1.5}>Enter Card Information</Paragraph>

      <Grid container spacing={2}>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            label="Name"
            size="medium"
            name="cardHolderName"
            onChange={handleChange}
            value={values.cardHolderName}
            helperText={touched.cardHolderName && errors.cardHolderName}
            error={Boolean(touched.cardHolderName && errors.cardHolderName)}
          />
        </Grid>

        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            size="medium"
            label="Card No"
            name="cardNo"
            onChange={handleChange}
            value={values.cardNo}
            helperText={touched.cardNo && errors.cardNo}
            error={Boolean(touched.cardNo && errors.cardNo)}
            inputRef={withMask("9999 9999 9999 9999")}
          />
        </Grid>

        <Grid item sm={2} xs={12}>
          <TextField
            fullWidth
            label="Expiry"
            size="medium"
            name="cardExpiry"
            onChange={handleChange}
            value={values.cardExpiry}
            helperText={touched.cardExpiry && errors.cardExpiry}
            error={Boolean(touched.cardExpiry && errors.cardExpiry)}
            inputRef={withMask("99/9999")}
          />
        </Grid>

        <Grid item sm={2} xs={12}>
          <TextField
            fullWidth
            label="CVC"
            size="medium"
            name="cardCVC"
            value={values.cardCVC}
            onChange={handleChange}
            helperText={touched.cardCVC && errors.cardCVC}
            error={Boolean(touched.cardCVC && errors.cardCVC)}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            label="Save this card"
            control={
              <Checkbox
                size="small"
                name="saveCard"
                onChange={handleChange}
                checked={values.saveCard}
              />
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}
