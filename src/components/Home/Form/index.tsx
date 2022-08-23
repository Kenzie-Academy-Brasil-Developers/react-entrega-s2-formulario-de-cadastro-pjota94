import { useForm } from "react-hook-form";
import { Container } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthTechs } from "../../../context/TechContext";
import { ICreateTechsProps } from "../../../context/UserContext";

const Form = () => {
  const schema = yup.object({
    title: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateTechsProps>({
    resolver: yupResolver(schema),
  });

  const { createTech } = useContext(AuthTechs);

  return (
    <Container>
      <form onSubmit={handleSubmit(createTech)}>
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
