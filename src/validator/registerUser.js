import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email invalido"),
  bio: yup.string().required("Bio obrigatório"),
  contact: yup.string().required("Contato obrigatório"),
  course_module: yup.string().required("Modulo obrigatório"),
  password: yup
    .string()
    .required("Senha Obrigatória")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),

  ConfirmedPassword: yup
    .string()
    .required("Senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

export default schema;
