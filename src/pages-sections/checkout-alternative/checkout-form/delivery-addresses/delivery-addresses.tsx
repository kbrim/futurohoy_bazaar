import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FormHelperText from "@mui/material/FormHelperText";
import styled from "@mui/material/styles/styled";
// FORMIK
import { useFormikContext } from "formik";
// MUI ICON COMPONENTS
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import ModeEditOutline from "@mui/icons-material/ModeEditOutline";
// LOCAL CUSTOM HOOK
import useDeliveryAddresses from "./use-delivery-addresses";
// LOCAL CUSTOM COMPONENTS
import Heading from "../heading";
import DeliveryAddressForm from "./delivery-address-form";
// GLOBAL CUSTOM COMPONENTS
import { H6, Paragraph } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box";
// TYPES
import { InitialValues } from "../_types";
import { DeliveryAddress } from "models/Common";

// STYLED COMPONENTS
const AddressCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "error",
})<{ active: boolean; error: boolean }>(({ theme, active, error }) => ({
  padding: "1rem",
  boxShadow: "none",
  cursor: "pointer",
  position: "relative",
  backgroundColor: theme.palette.grey[100],
  border: `1px solid ${active ? theme.palette.primary.main : "transparent"}`,
  ...(error && {
    color: theme.palette.error.main,
    backgroundColor: theme.palette.error.light,
  }),
}));

// ==============================================================
type Props = { deliveryAddresses: DeliveryAddress[] };
// ==============================================================

export default function DeliveryAddresses({ deliveryAddresses }: Props) {
  const { values, touched, errors, setFieldValue } =
    useFormikContext<InitialValues>();

  const {
    openModal,
    editDeliveryAddress,
    handleCloseModal,
    handleAddNewAddress,
    handleEditDeliveryAddress,
    handleDeleteDeliveryAddress,
  } = useDeliveryAddresses();

  return (
    <Card sx={{ p: 3, mb: 3 }}>
      {/* HEADING & BUTTON SECTION */}
      <FlexBetween mb={4}>
        <Heading number={2} title="Delivery Address" mb={0} />

        <Button
          color="primary"
          variant="outlined"
          onClick={handleAddNewAddress}
        >
          Add New Address
        </Button>
      </FlexBetween>

      {/* ADDRESS LIST SECTION */}
      <Grid container spacing={3}>
        {deliveryAddresses.map((item, ind) => (
          <Grid item md={4} sm={6} xs={12} key={ind}>
            <AddressCard
              onClick={() => setFieldValue("address", item.street1)}
              active={item.street1 === values.address}
              error={Boolean(touched.address && errors.address)}
            >
              <FlexBox position="absolute" top={5} right={5}>
                <IconButton
                  size="small"
                  onClick={handleEditDeliveryAddress(item)}
                >
                  <ModeEditOutline fontSize="inherit" />
                </IconButton>

                <IconButton
                  size="small"
                  color="error"
                  onClick={() => handleDeleteDeliveryAddress(item.id)}
                >
                  <DeleteOutline fontSize="inherit" />
                </IconButton>
              </FlexBox>

              <H6 mb={0.5}>{item.name}</H6>
              <Paragraph color="grey.700">{item.street1}</Paragraph>
              {item.street2 ? (
                <Paragraph color="grey.700">{item.street2}</Paragraph>
              ) : null}
              <Paragraph color="grey.700">{item.phone}</Paragraph>
            </AddressCard>
          </Grid>
        ))}
      </Grid>

      {touched.address && (
        <FormHelperText error sx={{ mt: 2, pl: 1 }}>
          {errors.address}
        </FormHelperText>
      )}

      {/* SHOW DELIVERY ADDRESS FORM MODAL WHEN CLICK EDIT BUTTON */}
      <DeliveryAddressForm
        open={openModal}
        handleCloseModal={handleCloseModal}
        deliveryAddress={editDeliveryAddress}
      />
    </Card>
  );
}
