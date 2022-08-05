import Form from "../Form";
import { Container } from "./styles";

const Card = ({ handleHome }) => {
  return (
    <Container>
      <p className="tittle">Crie sua conta</p>
      <span>Rapido e grátis, vamos nessa</span>
      <Form handleHome={handleHome} />
    </Container>
  );
};

export default Card;
