import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthTechs, IUpdateWorks } from "../../../context/TechContext";
import { Container } from "./styles";
import * as yup from "yup";

const FormEditWork = () => {
  const schema = yup.object({
    title: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateWorks>({
    resolver: yupResolver(schema),
  });
  const { updateWork } = useContext(AuthTechs);

  return (
    <Container>
      <form onSubmit={handleSubmit(updateWork)}>
        <label className="nome">Titulo</label>
        <input placeholder="Digite o Titulo" {...register("title")} />
        <p className="error">{errors.title?.message}</p>
        <label className="status">Descrição</label>
        <input
          className="input-work"
          placeholder="Digite a descrição"
          {...register("description")}
        />
        <p className="error">{errors.description?.message}</p>
        <button type="submit">Cadastrar Trabalho</button>
      </form>
    </Container>
  );
};

export default FormEditWork;
