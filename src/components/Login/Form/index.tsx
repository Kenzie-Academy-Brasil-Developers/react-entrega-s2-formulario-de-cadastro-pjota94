import { useForm } from "react-hook-form";
import { FormStyle } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../validator/loginUser";
import { useContext } from "react";
import { AuthContext, ILoginProps } from "../../../context/UserContext";
import Input from "../Input";

const Form = () => {
  const { onLogin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginProps>({
    resolver: yupResolver(schema),
  });

  return (
    <FormStyle onSubmit={handleSubmit(onLogin)}>
      <label className="label-email">Email</label>
      <Input
        id="email"
        name={"email"}
        register={register}
        error={errors?.email}
        placeholder={"Digite seu nome"}
      />
      <label className="label-senha">Senha</label>
      <Input
        id="password"
        name={"password"}
        register={register}
        error={errors?.password}
        placeholder={"Digite sua senha"}
        type={"password"}
      />
      <button type="submit">Entrar</button>
    </FormStyle>
  );
};

export default Form;
