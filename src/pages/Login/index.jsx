import { useNavigate } from "react-router-dom";
import Card from "../../components/Login/Card";
import Logo from "../../components/Login/Logo";
import { Container } from "./styles";

const Login = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home", { replace: true });
  };
  const handleRegister = () => {
    navigate("/register", { replace: true });
  };
  return (
    <>
      <Container>
        <Logo />
        <Card handleRegister={handleRegister} handleHome={handleHome}></Card>
      </Container>
    </>
  );
};

export default Login;
