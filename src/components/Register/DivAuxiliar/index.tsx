import { Container } from "./styles";
import logo from "../../../assets/Logo.svg";

interface IDivAuxiliarProps {
  handleInicio: () => void;
}

const DivAuxiliar = ({ handleInicio }: IDivAuxiliarProps) => {
  return (
    <Container>
      <img src={logo} alt="" />
      <button onClick={handleInicio}>Voltar</button>
    </Container>
  );
};

export default DivAuxiliar;
