import { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
import { Container } from "./styles";

const DivTop = () => {
  const { setIsModal } = useContext(AuthContext);
  const fecharModal = () => {
    setIsModal(false);
  };

  return (
    <Container>
      <p>Cadastrar Tecnologia</p>
      <button onClick={fecharModal}>X</button>
    </Container>
  );
};

export default DivTop;
