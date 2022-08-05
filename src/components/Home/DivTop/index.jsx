import { Container } from "./styles";

const DivTop = ({ setIsModal }) => {
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
