"use client";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// FORMIK
import { Formik } from "formik";
// YUP
import * as yup from "yup";
// CUSTOM DATA MODEL
import Payment from "models/Payment.model";

// ==============================================================
type Props = { payment: Payment };
// ==============================================================

export default function PaymentForm({ payment }: Props) {
  const INITIAL_VALUES = {
    exp: payment?.exp || "",
    cvc: payment?.cvc || "",
    name: payment?.payment_method || "",
    card_no: payment?.card_no || "",
  };

  const VALIDATION_SCHEMA = yup.object().shape({
    name: yup.string().required("Name is required"),
    card_no: yup.string().required("Card No is required"),
    exp: yup.string().required("Card expiry date is required"),
    cvc: yup.string().required("Card CVC is required"),
  });

  const handleFormSubmit = async (values: typeof INITIAL_VALUES) => {
    console.log(values);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="card_no"
                label="Card Number"
                value={values.card_no}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.card_no && errors.card_no}
                error={Boolean(touched.card_no && errors.card_no)}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="name"
                label="Name on Card"
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
                name="exp"
                label="Exp. Date"
                value={values.exp}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.exp && errors.exp}
                error={Boolean(touched.exp && errors.exp)}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="cvc"
                label="CVC"
                value={values.cvc}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.cvc && errors.cvc}
                error={Boolean(touched.cvc && errors.cvc)}
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
