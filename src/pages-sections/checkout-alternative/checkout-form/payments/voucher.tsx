import { useState } from "react";
// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import ButtonBase from "@mui/material/ButtonBase";
import FormControlLabel from "@mui/material/FormControlLabel";
// FORMIK
import { useFormikContext } from "formik";
// LOCAL CUSTOM COMPONENT
import Heading from "../heading";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography";
// DATA
import { months, years } from "data/months-years";
// CUSTOM DATA MODEL
import { InitialValues } from "../_types";

export default function Voucher() {
  const { values, errors, touched, handleChange, setFieldValue } =
    useFormikContext<InitialValues>();

  const [hasVoucher, setHasVoucher] = useState(false);

  return (
    <Box mb={3}>
      <ButtonBase
        disableRipple
        onClick={() => setHasVoucher((state) => !state)}
        sx={{ color: "primary.main", fontWeight: 600 }}
      >
        I have a voucher
      </ButtonBase>

      <Collapse in={hasVoucher}>
        <FlexBox mt={3} gap={2} maxWidth="400px">
          <TextField
            fullWidth
            name="voucher"
            value={values.voucher}
            onChange={handleChange}
            placeholder="Enter voucher code here"
          />
          <Button variant="contained" color="primary" type="button">
            Apply
          </Button>
        </FlexBox>
      </Collapse>
    </Box>
  );
}
