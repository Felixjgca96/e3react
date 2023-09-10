import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from "formik";

export const CheckoutDatosStyled = styled.div`
  margin: 0 auto;
  margin-top: 110px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 0px;
  width: 300px;
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
