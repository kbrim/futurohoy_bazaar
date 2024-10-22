import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
// FORMIK
import { useFormikContext } from "formik";
// LOCAL CUSTOM HOOK
import useDeliveryDate from "./use-delivery-date";
// LOCAL CUSTOM COMPONENT
import Heading from "../heading";
// TYPES
import { InitialValues } from "../_types";
import { DeliveryTime } from "models/Common";

// ==============================================================
type Props = { deliveryTimes: DeliveryTime[] };
// ==============================================================

export default function DeliveryDate({ deliveryTimes }: Props) {
  const { values, touched, errors, handleChange } =
    useFormikContext<InitialValues>();
  const { dates } = useDeliveryDate();

  return (
    <Card sx={{ p: 3, mb: 3 }}>
      <Heading number={1} title="Delivery Date and Time" />

      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
          <TextField
            select
            fullWidth
            name="date"
            size="medium"
            label="Delivery Date"
            value={values.date}
            onChange={handleChange}
            helperText={touched.date && errors.date}
            error={Boolean(touched.date && errors.date)}
            SelectProps={{ MenuProps: { elevation: 2 } }}
          >
            {dates.map((item) => (
              <MenuItem value={item.value} key={item.label}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField
            select
            fullWidth
            name="time"
            size="medium"
            value={values.time}
            label="Delivery Time"
            onChange={handleChange}
            helperText={touched.time && errors.time}
            error={Boolean(touched.time && errors.time)}
            SelectProps={{ MenuProps: { elevation: 2 } }}
          >
            {deliveryTimes.map((item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Card>
  );
}
