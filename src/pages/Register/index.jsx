import { useNavigate } from "react-router-dom";
import Card from "../../components/Register/Card";
import DivAuxiliar from "../../components/Register/DivAuxiliar";
import { Container } from "./styles";

const Register = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home", { replace: true });
  };
  const handleInicio = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <Container className="test">
        <DivAuxiliar handleInicio={handleInicio} />
        <Card handleHome={handleHome} />
      </Container>
    </>
  );
};

export default Register;
