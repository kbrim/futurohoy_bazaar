"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { Formik } from "formik";
// LOCAL CUSTOM COMPONENTS
import ShippingForm from "./shipping-form";
import BillingAddressForm from "./billing-address-form";
// TYPES
import { InitialValues } from "./types";

const initialValues: InitialValues = {
  shipping_zip: "",
  shipping_name: "",
  shipping_email: "",
  shipping_contact: "",
  shipping_company: "",
  shipping_address1: "",
  shipping_address2: "",
  shipping_country: "US",
  same_as_shipping: false,
  billing_zip: "",
  billing_name: "",
  billing_email: "",
  billing_contact: "",
  billing_company: "",
  billing_address1: "",
  billing_address2: "",
  billing_country: "US",
};

// uncomment these fields below for from validation
const checkoutSchema = yup.object().shape({
  shipping_name: yup.string().required("Name is required"),
  shipping_email: yup
    .string()
    .email("invalid email")
    .required("Email is required"),
  shipping_contact: yup.string().required("Phone is required"),
  shipping_zip: yup.string().required("Zip is required"),
  shipping_country: yup.string().required("Country is required"),
  shipping_address1: yup.string().required("Address is required"),
  // billing_name: yup.string().required("required"),
  // billing_email: yup.string().required("required"),
  // billing_contact: yup.string().required("required"),
  // billing_zip: yup.string().required("required"),
  // billing_country: yup.object().required("required"),
  // billing_address1: yup.string().required("required"),
});

export default function CheckoutForm() {
  const router = useRouter();

  const handleFormSubmit = async (values: InitialValues) => {
    router.push("/payment");
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={checkoutSchema}
    >
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <ShippingForm />

            <Grid container spacing={6}>
              <Grid item sm={6} xs={12}>
                <Button
                  fullWidth
                  href="/cart"
                  color="primary"
                  variant="outlined"
                  LinkComponent={Link}
                >
                  Volver al Carrito
                </Button>
              </Grid>

            </Grid>
          </form>
        );
      }}
    </Formik>
  );
}
