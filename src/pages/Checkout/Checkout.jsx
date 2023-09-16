import React from "react";
import { ContainerCheckoutStyled } from "./CheckoutStyles";
import CheckoutForm from "../../components/Checkout/Form/CheckoutForm";

const Checkout = () => {
  return (
    <ContainerCheckoutStyled>
      <CheckoutForm />
    </ContainerCheckoutStyled>
  );
};

export default Checkout;
