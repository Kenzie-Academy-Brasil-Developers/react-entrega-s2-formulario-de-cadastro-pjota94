import { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
import { Container } from "./styles";

const DivTopEditar = () => {
  const { setIsModalEdit } = useContext(AuthContext);
  const fecharModal = () => {
    setIsModalEdit(false);
  };

  return (
    <Container>
      <p>Tecnologia Detalhes</p>
      <button onClick={fecharModal}>X</button>
    </Container>
  );
};

export default DivTopEditar;
