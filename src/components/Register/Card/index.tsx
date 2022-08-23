import Form from "../Form";
import { Container } from "./styles";

const Card = () => {
  return (
    <Container>
      <p className="tittle">Crie sua conta</p>
      <span>Rapido e grátis, vamos nessa</span>
      <Form />
    </Container>
  );
};

export default Card;
