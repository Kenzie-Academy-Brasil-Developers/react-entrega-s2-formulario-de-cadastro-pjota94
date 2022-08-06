import { useForm } from "react-hook-form";
import { FormStyle } from "./styles";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../validator/loginUser";
import { toast } from "react-toastify";

const Form = ({ handleHome }) => {
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
      .post("/sessions", data)
      .then((res) => {
        console.log(res);
        window.localStorage.clear();
        window.localStorage.setItem("@kenzie:token", res.data.token);
        window.localStorage.setItem("@kenzie:id", res.data.user.id);
        navigate("/home", { replace: true });
        toast.success("Usuário logado com sucesso");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error("E-mail ou Senha Inválido");
      });
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
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
