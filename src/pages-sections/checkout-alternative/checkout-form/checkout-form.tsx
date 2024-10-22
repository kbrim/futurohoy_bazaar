"use client";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import * as yup from "yup";
// LOCAL CUSTOM COMPONENTS
import Heading from "./heading";
import DeliveryDate from "./delivery-date";
import DeliveryAddresses from "./delivery-addresses";
import Voucher from "./payments/voucher";
import CardList from "./payments/card-list";
import PaymentForm from "./payments/payment-form";
// TYPES
import { InitialValues } from "./_types";
import { DeliveryTime, DeliveryAddress, PaymentCard } from "models/Common";

const checkoutSchema = yup.object().shape({
  card: yup.string(),
  voucher: yup.string(),
  date: yup.string().required("Delivery date is required"),
  time: yup.string().required("Delivery time is required"),
  address: yup.string().required("Delivery address is required"),
  cardHolderName: yup.string().when("card", {
    is: (val: string) => !val,
    then: (Schema) => Schema.required("Name is required"),
  }),
  cardNo: yup.number().when("card", {
    is: (val: string) => !val,
    then: (Schema) => Schema.required("Card No is required"),
  }),
  cardExpiry: yup.string().when("card", {
    is: (val: string) => !val,
    then: (Schema) => Schema.required("Expiry is required"),
  }),
  cardCVC: yup.string().when("card", {
    is: (val: string) => !val,
    then: (Schema) => Schema.required("CVC is required"),
  }),
});

// ==============================================================
interface Props {
  cards: PaymentCard[];
  deliveryTimes: DeliveryTime[];
  deliveryAddresses: DeliveryAddress[];
}
// ==============================================================

export default function CheckoutForm({
  cards,
  deliveryAddresses,
  deliveryTimes,
}: Props) {
  const initialValues: InitialValues = {
    card: "",
    date: "",
    time: "",
    address: "",
    voucher: "",
    cardNo: "",
    cardCVC: "",
    cardExpiry: "",
    cardHolderName: "",
    saveCard: false,
  };

  const handleFormSubmit = async (values: InitialValues) => {
    console.log(values);
    // router.push("/payment");
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={checkoutSchema}
    >
      {({ values, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <DeliveryDate deliveryTimes={deliveryTimes} />

            <DeliveryAddresses deliveryAddresses={deliveryAddresses} />

            <Card sx={{ p: 3, mb: 3 }}>
              <Heading number={3} title="Payment Details" />
              {!values.card && <PaymentForm />}
              <CardList cards={cards} />
              <Voucher />
              <Button
                size="large"
                type="submit"
                color="primary"
                variant="contained"
              >
                Place Order
              </Button>
            </Card>
          </form>
        );
      }}
    </Formik>
  );
}
