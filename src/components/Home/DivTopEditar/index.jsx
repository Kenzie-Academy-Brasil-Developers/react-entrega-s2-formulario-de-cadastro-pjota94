import { Container } from "./styles";

const DivTopEditar = ({ setIsModalEdit }) => {
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
