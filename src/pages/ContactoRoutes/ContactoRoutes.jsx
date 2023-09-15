import Input from "../../components/UI/Input/Input";
import Submit from "../../components/UI/Submit/Submit";
import { checkoutInitialValues } from "../../formik/initialValues";
import { checkoutValidationSchema } from "../../formik/validationSchema";
import { CheckoutDatosStyled, Form, Formik } from "./ContactoRoutesStyles";

const CheckoutForm = ({}) => {
  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={(values) => console.log(values)}
      >
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
            <Submit>Enviar</Submit>
          </div>
        </Form>
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
