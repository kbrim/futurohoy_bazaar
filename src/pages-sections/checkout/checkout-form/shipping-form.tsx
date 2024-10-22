import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// FORMIK
import { useFormikContext } from "formik";
// GLOBAL CUSTOM COMPONENT
import { H6 } from "components/Typography";
// DUMMY CUSTOM DATA
import countryList from "data/countryList";
// TYPES
import { InitialValues } from "./types";
// STYLED COMPONENT
import { CardRoot, FormWrapper } from "./styles";

export default function ShippingForm() {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    useFormikContext<InitialValues>();

  return (
    <CardRoot>
      <H6 mb={2}>Shipping Address</H6>

      <FormWrapper>
        <TextField
          fullWidth
          label="Full Name"
          name="shipping_name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.shipping_name}
          helperText={touched.shipping_name && errors.shipping_name}
          error={Boolean(touched.shipping_name && errors.shipping_name)}
        />

        <TextField
          fullWidth
          label="Phone Number"
          name="shipping_contact"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.shipping_contact}
          helperText={touched.shipping_contact && errors.shipping_contact}
          error={Boolean(touched.shipping_contact && errors.shipping_contact)}
        />

        <TextField
          fullWidth
          type="email"
          label="Email Address"
          name="shipping_email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.shipping_email}
          helperText={touched.shipping_email && errors.shipping_email}
          error={Boolean(touched.shipping_email && errors.shipping_email)}
        />

        <TextField
          fullWidth
          label="Company"
          name="shipping_company"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.shipping_company}
          helperText={touched.shipping_company && errors.shipping_company}
          error={Boolean(touched.shipping_company && errors.shipping_company)}
        />

        <TextField
          fullWidth
          label="Address 1"
          name="shipping_address1"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.shipping_address1}
          helperText={touched.shipping_address1 && errors.shipping_address1}
          error={Boolean(touched.shipping_address1 && errors.shipping_address1)}
        />

        <TextField
          fullWidth
          label="Address 2"
          name="shipping_address2"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.shipping_address2}
          helperText={touched.shipping_address2 && errors.shipping_address2}
          error={Boolean(touched.shipping_address2 && errors.shipping_address2)}
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
              variant="outlined"
              placeholder="Select Country"
              helperText={touched.shipping_country && errors.shipping_country}
              error={Boolean(
                touched.shipping_country && errors.shipping_country,
              )}
              {...params}
            />
          )}
        />

        <TextField
          fullWidth
          label="Zip Code"
          name="shipping_zip"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.shipping_zip}
          helperText={touched.shipping_zip && errors.shipping_zip}
          error={Boolean(touched.shipping_zip && errors.shipping_zip)}
        />
      </FormWrapper>
    </CardRoot>
  );
}
