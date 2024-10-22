"use client";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// FORMIK
import { Formik } from "formik";
// YUP
import * as yup from "yup";
// CUSTOM DATA MODEL
import User from "models/User.model";

// ==============================================================
type Props = { user: User };
// ==============================================================

export default function ProfileEditForm({ user }: Props) {
  const INITIAL_VALUES = {
    email: user.email || "",
    contact: user.phone || "",
    lastName: user.name.lastName || "",
    firstName: user.name.firstName || "",
    birthOfDate: new Date(user.dateOfBirth) || new Date(),
  };

  const VALIDATION_SCHEMA = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("invalid email").required("Email is required"),
    contact: yup.string().required("Contact is required"),
    birthOfDate: yup.date().required("Birth date is required"),
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
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="firstName"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                helperText={touched.firstName && errors.firstName}
                error={Boolean(touched.firstName && errors.firstName)}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="lastName"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                helperText={touched.lastName && errors.lastName}
                error={Boolean(touched.lastName && errors.lastName)}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="email"
                type="email"
                label="Email"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                helperText={touched.email && errors.email}
                error={Boolean(touched.email && errors.email)}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone"
                name="contact"
                onBlur={handleBlur}
                value={values.contact}
                onChange={handleChange}
                helperText={touched.contact && errors.contact}
                error={Boolean(touched.contact && errors.contact)}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <DatePicker
                label="Birth Date"
                value={values.birthOfDate}
                onChange={(newValue) => setFieldValue("birthOfDate", newValue)}
                slots={{ textField: TextField }}
                slotProps={{
                  textField: {
                    sx: { mb: 1 },
                    size: "small",
                    fullWidth: true,
                    error: Boolean(touched.birthOfDate && errors.birthOfDate),
                    helperText: (touched.birthOfDate &&
                      errors.birthOfDate) as string,
                  },
                }}
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
