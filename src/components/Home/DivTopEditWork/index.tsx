import { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
import { Container } from "./styles";

const DivTopEditWork = () => {
  const { setIsModalEditWork } = useContext(AuthContext);
  const fecharModal = () => {
    setIsModalEditWork(false);
  };

  return (
    <Container>
      <p>Trabalhos Detalhes</p>
      <button onClick={fecharModal}>X</button>
    </Container>
  );
};

export default DivTopEditWork;
