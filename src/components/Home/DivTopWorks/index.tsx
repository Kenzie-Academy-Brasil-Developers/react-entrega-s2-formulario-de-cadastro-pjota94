import { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
import { Container } from "./styles";

const DivTopWorks = () => {
  const { setIsModalWorks } = useContext(AuthContext);
  const fecharModal = () => {
    setIsModalWorks(false);
  };

  return (
    <Container>
      <p>Cadastrar Trabalho</p>
      <button onClick={fecharModal}>X</button>
    </Container>
  );
};

export default DivTopWorks;
