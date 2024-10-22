"use client";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as yup from "yup";
// CUSTOM DATA MODEL
import Address from "models/Address.model";

// =============================================================
type Props = { address: Address };
// =============================================================

export default function AddressForm({ address }: Props) {
  const INITIAL_VALUES = {
    name: address.title || "",
    contact: address.phone || "",
    address: address.street || "",
  };

  const VALIDATION_SCHEMA = yup.object().shape({
    name: yup.string().required("Name is required"),
    address: yup.string().required("Address is required"),
    contact: yup.string().required("Contact is required"),
  });

  // HANDLE FORM SUBMIT
  const handleSubmit = async (values: typeof INITIAL_VALUES) => {
    console.log(values);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="name"
                label="Name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.name && errors.name}
                error={Boolean(touched.name && errors.name)}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="address"
                label="Address Line"
                value={values.address}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.address && errors.address}
                error={Boolean(touched.address && errors.address)}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone"
                name="contact"
                value={values.contact}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.contact && errors.contact}
                error={Boolean(touched.contact && errors.contact)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
