import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFormikContext } from "formik";
import clsx from "clsx";
// GLOBAL CUSTOM COMPONENTS
import { H6 } from "components/Typography";
// DUMMY CUSTOM DATA
import countryList from "data/countryList";
// TYPES
import { InitialValues } from "./types";
// STYLED COMPONENT
import { CardRoot, FormWrapper } from "./styles";

export default function BillingAddressForm() {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    useFormikContext<InitialValues>();

  return (
    <CardRoot>
      <H6 mb={2}>Billing Address</H6>

      <FormControlLabel
        label="Same as shipping address"
        className={clsx({ "mb-1": values.same_as_shipping === false })}
        control={
          <Checkbox
            size="small"
            color="secondary"
            name="same_as_shipping"
            onChange={handleChange}
            value={values.same_as_shipping}
          />
        }
      />

      {values.same_as_shipping === false && (
        <FormWrapper>
          <TextField
            fullWidth
            label="Full Name"
            name="billing_name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.billing_name}
            helperText={touched.billing_name && errors.billing_name}
            error={Boolean(touched.billing_name && errors.billing_name)}
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="billing_contact"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.billing_contact}
            helperText={touched.billing_contact && errors.billing_contact}
            error={Boolean(touched.billing_contact && errors.billing_contact)}
          />

          <TextField
            fullWidth
            type="email"
            name="billing_email"
            label="Email Address"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.billing_email}
            helperText={touched.billing_email && errors.billing_email}
            error={Boolean(touched.billing_email && errors.billing_email)}
          />

          <TextField
            fullWidth
            label="Company"
            name="billing_company"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.billing_company}
            helperText={touched.billing_company && errors.billing_company}
            error={Boolean(touched.billing_company && errors.billing_company)}
          />

          <TextField
            fullWidth
            label="Address 1"
            name="billing_address1"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.billing_address1}
            helperText={touched.billing_address1 && errors.billing_address1}
            error={Boolean(touched.billing_address1 && errors.billing_address1)}
          />

          <TextField
            fullWidth
            label="Address 2"
            name="billing_address2"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.billing_address2}
            helperText={touched.billing_address2 && errors.billing_address2}
            error={Boolean(touched.billing_address2 && errors.billing_address2)}
          />

          <Autocomplete
            fullWidth
            options={countryList}
            getOptionLabel={(option) => option.label}
            value={countryList.find(
              (item) => item.value === values.shipping_country,
            )}
            onChange={(_, item) =>
              setFieldValue("shipping_country", item?.value || "")
            }
            renderInput={(params) => (
              <TextField
                label="Country"
                placeholder="Select Country"
                helperText={touched.billing_country && errors.billing_country}
                error={Boolean(
                  touched.billing_country && errors.billing_country,
                )}
                {...params}
              />
            )}
          />

          <TextField
            fullWidth
            label="Zip Code"
            name="billing_zip"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.billing_zip}
            helperText={touched.billing_zip && errors.billing_zip}
            error={Boolean(touched.billing_zip && errors.billing_zip)}
          />
        </FormWrapper>
      )}
    </CardRoot>
  );
}
