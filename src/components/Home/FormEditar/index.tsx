import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthTechs, IUpdateProps } from "../../../context/TechContext";
import { Container } from "./styles";

const FormEditar = () => {
  const { register, handleSubmit } = useForm<IUpdateProps>();

  const { updateTech } = useContext(AuthTechs);

  return (
    <Container>
      <form onSubmit={handleSubmit(updateTech)}>
        <label className="status">Status</label>
        <select {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit">Salvar alterações</button>
      </form>
    </Container>
  );
};

export default FormEditar;
