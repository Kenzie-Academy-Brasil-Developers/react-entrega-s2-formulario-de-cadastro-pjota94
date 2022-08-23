import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export default schema;
