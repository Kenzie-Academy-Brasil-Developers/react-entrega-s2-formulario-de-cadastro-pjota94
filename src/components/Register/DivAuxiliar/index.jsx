import { Container } from "./styles";
import logo from "../../../assets/Logo.svg";
const DivAuxiliar = ({ handleInicio }) => {
  return (
    <Container>
      <img src={logo} alt="" />
      <button onClick={handleInicio}>Voltar</button>
    </Container>
  );
};

export default DivAuxiliar;
