import * as Yup from "yup";

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required("Campo Requerido"),
  email: Yup.string().required("Campo Requerido"),
  cellphone: Yup.string()
    .min(10, "Mínimo de caracteres: 10")
    .required("Campo Requerido"),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required("Campo Requerido"),
  email: Yup.string().email("Email inválido").required("Campo Requerido"),
  password: Yup.string()
    .min(6, "Mínimo de caracteres: 6")
    .required("Campo Requerido"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Email inválido").required("Campo Requerido"),
  password: Yup.string()
    .min(6, "Mínimo de caracteres: 6")
    .required("Campo Requerido"),
});
