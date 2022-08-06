import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { FormStyle } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../validator/registerUser";
import { toast } from "react-toastify";

const Form = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    api
      .post("/users", data)
      .then((res) => {
        console.log(res);
        navigate("/", { replace: true });
        toast.success("Conta criada com sucesso! ;)");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <label>Nome</label>
      <input placeholder="Digite aqui seu nome" {...register("name")} />
      <p className="error">{errors.name?.message}</p>
      <label>Email</label>
      <input placeholder="Digite aqui seu email" {...register("email")} />
      <p className="error">{errors.email?.message}</p>
      <label>Senha</label>
      <input
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <p className="error">{errors.password?.message}</p>
      <label>Confirmar Senha</label>
      <input
        type="password"
        placeholder="Digite novamente sua senha"
        {...register("ConfirmedPassword")}
      />
      <p className="error">{errors.ConfirmedPassword?.message}</p>
      <label>Bio</label>
      <input placeholder="Fale sobre você" {...register("bio")} />
      <p className="error">{errors.bio?.message}</p>
      <label>Contato</label>
      <input placeholder="Opção de contato" {...register("contact")} />
      <p className="error">{errors.contact?.message}</p>
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
