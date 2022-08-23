import Button, { IButtonRegisterProp } from "../Button";
import Form from "../Form";
import { Container } from "./styles";

const Card = ({ handleRegister }: IButtonRegisterProp) => {
  return (
    <Container>
      <p className="tittle">Login</p>
      <Form />
      <span>Ainda não possui uma conta?</span>
      <Button handleRegister={handleRegister} />
    </Container>
  );
};

export default Card;
