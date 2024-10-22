interface Address {
  zip: string;
  name: string;
  email: string;
  contact: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
}

export interface InitialValues {
  shipping_zip: string;
  shipping_name: string;
  shipping_email: string;
  shipping_contact: string;
  shipping_company: string;
  shipping_address1: string;
  shipping_address2: string;
  shipping_country: string;
  same_as_shipping: boolean;
  billing_zip: string;
  billing_name: string;
  billing_email: string;
  billing_contact: string;
  billing_company: string;
  billing_address1: string;
  billing_address2: string;
  billing_country: string;
}
