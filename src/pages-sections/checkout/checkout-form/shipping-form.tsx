import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// FORMIK
import { useFormikContext } from "formik";
// GLOBAL CUSTOM COMPONENT
import { H6 } from "components/Typography";

// TYPES
import { InitialValues } from "./types";
// STYLED COMPONENT
import { CardRoot, FormWrapper } from "./styles";

export default function ShippingForm() {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    useFormikContext<InitialValues>();

  return (
    <CardRoot>
      <H6 mb={2}>Datos de envio</H6>

      <FormWrapper>
        <TextField
          fullWidth
          label="Nombre Completo"
          name="shipping_name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.shipping_name}
          helperText={touched.shipping_name && errors.shipping_name}
          error={Boolean(touched.shipping_name && errors.shipping_name)}
        />

        <TextField
          fullWidth
          label="Telefono de contacto"
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
          label="Email"
          name="shipping_email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.shipping_email}
          helperText={touched.shipping_email && errors.shipping_email}
          error={Boolean(touched.shipping_email && errors.shipping_email)}
        />

        <TextField
          fullWidth
          label="Empresa"
          name="shipping_company"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.shipping_company}
          helperText={touched.shipping_company && errors.shipping_company}
          error={Boolean(touched.shipping_company && errors.shipping_company)}
        />

        <TextField
          fullWidth
          label="Direccion de contacto"
          name="shipping_address1"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.shipping_address1}
          helperText={touched.shipping_address1 && errors.shipping_address1}
          error={Boolean(touched.shipping_address1 && errors.shipping_address1)}
        />

        <TextField
          fullWidth
          label="Direccion de Envio"
          name="shipping_address2"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.shipping_address2}
          helperText={touched.shipping_address2 && errors.shipping_address2}
          error={Boolean(touched.shipping_address2 && errors.shipping_address2)}
        />

      </FormWrapper>
    </CardRoot>
  );
}
