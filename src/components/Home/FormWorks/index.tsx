import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthTechs } from "../../../context/TechContext";
import { Container } from "./styles";

export interface ICreateWorks {
  title: string;
  description: string;
  deploy_url: string;
  id?: string;
}

const FormWorks = () => {
  const schema = yup.object({
    title: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
    deploy_url: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateWorks>({
    resolver: yupResolver(schema),
  });

  const { createWorks } = useContext(AuthTechs);

  return (
    <Container>
      <form onSubmit={handleSubmit(createWorks)}>
        <label className="nome">Título</label>
        <input placeholder="Digite o título" {...register("title")} />
        <p className="error">{errors.title?.message}</p>
        <label className="status">Descrição</label>
        <input placeholder="Digite a descrição" {...register("description")} />
        <p className="error">{errors.description?.message}</p>
        <label className="link">Link</label>
        <input
          className="input-link"
          placeholder="Cole o link"
          {...register("deploy_url")}
        />
        <p className="error">{errors.deploy_url?.message}</p>
        <button type="submit">Cadastrar Trabalho</button>
      </form>
    </Container>
  );
};

export default FormWorks;
