import Button from "../Button";
import Form from "../Form";
import { Container } from "./styles";

const Card = ({ handleRegister, handleHome }) => {
  return (
    <Container>
      <p className="tittle">Login</p>
      <Form handleHome={handleHome} />
      <span>Ainda não possui uma conta?</span>
      <Button handleRegister={handleRegister} />
    </Container>
  );
};

export default Card;
