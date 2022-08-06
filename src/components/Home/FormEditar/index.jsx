import { useForm } from "react-hook-form";
import { Container } from "./styles";

const FormEditar = ({ idCard }) => {
  const { register, handleSubmit } = useForm();

  const token = window.localStorage.getItem("@kenzie:token");

  const onSubmit = (data) => {
    fetch(`https://kenziehub.herokuapp.com/users/techs/${idCard}`, {
      method: "PUT",
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
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
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
