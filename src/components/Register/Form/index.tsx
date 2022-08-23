import { useForm } from "react-hook-form";
import { FormStyle } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../validator/registerUser";
import { useContext } from "react";
import { AuthContext, IRegisterProps } from "../../../context/UserContext";
import InputRegister from "../InputRegister";

const Form = () => {
  const { onRegister } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterProps>({
    resolver: yupResolver(schema),
  });

  return (
    <FormStyle onSubmit={handleSubmit(onRegister)}>
      <label>Nome</label>
      <InputRegister
        id="name"
        name={"name"}
        register={register}
        error={errors?.name}
        placeholder={"Digite aqui seu nome"}
      />

      <label>Email</label>
      <InputRegister
        id="email"
        name={"email"}
        register={register}
        error={errors?.email}
        placeholder={"Digite aqui seu email"}
      />
      <label>Senha</label>
      <InputRegister
        id="password"
        name={"password"}
        register={register}
        error={errors?.password}
        placeholder={"Digite aqui sua senha"}
        type={"password"}
      />
      <label>Confirmar Senha</label>
      <InputRegister
        id="ConfirmedPassword"
        name={"ConfirmedPassword"}
        register={register}
        error={errors?.ConfirmedPassword}
        placeholder={"Digite novamente sua senha"}
        type={"password"}
      />

      <label>Bio</label>
      <InputRegister
        id="bio"
        name={"bio"}
        register={register}
        error={errors?.bio}
        placeholder={"Fale sobre você"}
      />

      <label>Contato</label>
      <InputRegister
        id="contact"
        name={"contact"}
        register={register}
        error={errors?.contact}
        placeholder={"Opção de contato"}
      />

      <label>Selecionar Modulo</label>
      <select {...register("course_module")}>
        {errors.course_module?.message}
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro Modulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo Modulo
        </option>
        <option value="Terceiro Modulo(Frontend Avançado II)">
          Terceiro Modulo
        </option>
        <option value="Quarto módulo (Introdução ao Backend)">
          Quarto Modulo
        </option>
        <option value="Quinto Modulo (Backend Avançado)">Quinto Modulo</option>
        <option value="Sexto Modulo (Backend Avançado II)">Sexto Modulo</option>
      </select>
      <button type="submit">Cadastrar</button>
    </FormStyle>
  );
};

export default Form;
