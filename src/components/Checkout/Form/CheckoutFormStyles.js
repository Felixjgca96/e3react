import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from "formik";

export const CheckoutDatosStyled = styled.div`
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 0px;
  width: 300px;
  h2 {
    @media (max-width: 375px) {
      font-size: 18px;
      text-align: center;
    }
  }
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 95%;
`;
