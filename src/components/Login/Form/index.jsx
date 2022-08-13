import { useForm } from "react-hook-form";
import { FormStyle } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../validator/loginUser";
import { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";

const Form = () => {
  const { onLogin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormStyle onSubmit={handleSubmit(onLogin)}>
      <label className="label-email">Email</label>
      <input placeholder="Digite seu nome" {...register("email")} />
      <p className="error">{errors.email?.message}</p>

      <label className="label-senha">Senha</label>
      <input
        type="password"
        placeholder="Digite sua senha"
        {...register("password")}
      />
      <p className="error">{errors.password?.message}</p>
      <button type="submit">Entrar</button>
    </FormStyle>
  );
};

export default Form;
