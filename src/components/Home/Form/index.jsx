import { useForm } from "react-hook-form";
import { Container } from "./styles";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const schema = yup.object({
    title: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const token = window.localStorage.getItem("@kenzie:token");

  const onSubmit = (data) => {
    fetch("https://kenziehub.herokuapp.com/users/techs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="nome">Nome</label>
        <input placeholder="Digite a Tecnologia" {...register("title")} />
        <p className="error">{errors.title?.message}</p>
        <label className="status">Selecionar Status</label>
        <select {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit">Cadastrar Tecnologia</button>
      </form>
    </Container>
  );
};

export default Form;
