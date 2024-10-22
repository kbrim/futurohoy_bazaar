import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
// FORMIK
import { Formik } from "formik";
// YUP
import * as yup from "yup";
// LOCAL CUSTOM COMPONENT
import { H5 } from "components/Typography";
// CUSTOM DATA MODEL
import { DeliveryAddress } from "models/Common";

const validationSchema = yup.object({
  street2: yup.string(),
  name: yup.string().required("Name is required"),
  street1: yup.string().required("Street is required"),
  phone: yup.number().required("Phone is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  zip: yup.number().required("Zip is required"),
});

// ==================================================================
interface Props {
  open: boolean;
  handleCloseModal: () => void;
  deliveryAddress?: DeliveryAddress;
}
// ==================================================================

export default function DeliveryAddressForm({
  deliveryAddress,
  open,
  handleCloseModal,
}: Props) {
  const initialValues = {
    name: deliveryAddress?.name || "",
    phone: deliveryAddress?.phone || "",
    zip: deliveryAddress?.zip || "",
    city: deliveryAddress?.city || "",
    state: deliveryAddress?.state || "",
    country: deliveryAddress?.country || "",
    street1: deliveryAddress?.street1 || "",
    street2: deliveryAddress?.street2 || "",
  };

  const handleAddNewAddress = (address: Omit<DeliveryAddress, "id">) => {
    console.log(address);
  };

  return (
    <Dialog open={open} onClose={handleCloseModal}>
      <DialogContent>
        <H5 mb={4}>Add New Address Information</H5>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            handleAddNewAddress(values);
            handleCloseModal();
            resetForm();
          }}
        >
          {({ errors, touched, values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    type="text"
                    name="name"
                    value={values.name}
                    label="Enter Your Name"
                    onChange={handleChange}
                    helperText={touched.name && errors.name}
                    error={Boolean(touched.name && errors.name)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    type="text"
                    name="street1"
                    label="Street line 1"
                    value={values.street1}
                    onChange={handleChange}
                    helperText={touched.street1 && errors.street1}
                    error={Boolean(touched.street1 && errors.street1)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    type="text"
                    name="street2"
                    label="Address line 2"
                    value={values.street2}
                    onChange={handleChange}
                    helperText={touched.street2 && errors.street2}
                    error={Boolean(touched.street2 && errors.street2)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    label="Enter Your Phone"
                    helperText={touched.phone && errors.phone}
                    error={Boolean(touched.phone && errors.phone)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="city"
                    label="City"
                    value={values.city}
                    onChange={handleChange}
                    helperText={touched.city && errors.city}
                    error={Boolean(touched.city && errors.city)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="state"
                    label="State"
                    value={values.state}
                    onChange={handleChange}
                    helperText={touched.state && errors.state}
                    error={Boolean(touched.state && errors.state)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="zip"
                    label="Zip"
                    type="number"
                    value={values.zip}
                    onChange={handleChange}
                    helperText={touched.zip && errors.zip}
                    error={Boolean(touched.zip && errors.zip)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="country"
                    label="Country"
                    value={values.country}
                    onChange={handleChange}
                    helperText={touched.country && errors.country}
                    error={Boolean(touched.country && errors.country)}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <Button color="primary" variant="contained" type="submit">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
