import { ButtonStyle } from "./styles";

export interface IButtonRegisterProp {
  handleRegister: () => void;
}

const Button = ({ handleRegister }: IButtonRegisterProp) => {
  return <ButtonStyle onClick={handleRegister}>Cadastre-se</ButtonStyle>;
};

export default Button;
