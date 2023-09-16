import Input from "../../UI/Input/Input";
import Submit from "../../UI/Submit/Submit";

import { CheckoutDatosStyled, Form, Formik } from "./CheckoutFormStyles";
import { checkoutInitialValues } from "../../../formik/initialValues";
import { checkoutValidationSchema } from "../../../formik/validationSchema";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../UI/Loader/Loader";
const CheckoutForm = ({ cartItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async (values) => {
          try {
            navigate("/gracias");
          } catch (error) {
            alert("Error al crear la orden");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Input
              name="name"
              htmlFor="nombre"
              type="text"
              id="nombre"
              placeholder="Nombre y apellido"
            >
              Nombre_Apellido
            </Input>
            <Input
              name="email"
              htmlFor="email"
              type="mail"
              id="email"
              placeholder="Email"
            >
              Email
            </Input>

            <Input
              name="cellphone"
              htmlFor="celular"
              type="number"
              id="celular"
              placeholder="Celular"
            >
              Celular
            </Input>
            <Input
              name="asunto"
              htmlFor="asunto"
              type="text"
              id="asunto"
              placeholder="Motivo"
            >
              Asunto
            </Input>

            <div>
              <Submit>{isSubmitting ? <Loader /> : "Enviar"}</Submit>
            </div>
          </Form>
        )}
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
