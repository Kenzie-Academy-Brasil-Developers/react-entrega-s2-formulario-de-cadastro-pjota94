import { ButtonStyle } from "./styles";

const Button = ({ handleRegister }) => {
  return <ButtonStyle onClick={handleRegister}>Cadastre-se</ButtonStyle>;
};

export default Button;
