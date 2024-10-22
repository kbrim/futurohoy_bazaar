"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useFormik } from "formik";
// GLOBAL CUSTOM COMPONENTS
import { H6, Span } from "components/Typography";
// STYLED COMPONENTS
import { RatingGroup } from "./styles";

export default function ReviewForm() {
  const initialValues = {
    rating: 0,
    comment: "",
    date: new Date().toISOString(),
  };

  const validationSchema = yup.object().shape({
    rating: yup.number().required("required"),
    comment: yup.string().required("required"),
  });

  const {
    dirty,
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <RatingGroup>
        <H6 color="grey.700">
          Your Rating <Span color="error.main">*</Span>
        </H6>

        <Rating
          color="warn"
          size="medium"
          value={values.rating}
          onChange={(_, value) => setFieldValue("rating", value)}
        />
      </RatingGroup>

      <Box mb={3}>
        <H6 color="grey.700" mb={1.5}>
          Your Review <Span color="error.main">*</Span>
        </H6>

        <TextField
          rows={8}
          multiline
          fullWidth
          name="comment"
          variant="outlined"
          onBlur={handleBlur}
          value={values.comment}
          onChange={handleChange}
          placeholder="Write a review here..."
          helperText={touched.comment && errors.comment}
          error={Boolean(touched.comment && errors.comment)}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={!(dirty && isValid)}
      >
        Submit
      </Button>
    </form>
  );
}
