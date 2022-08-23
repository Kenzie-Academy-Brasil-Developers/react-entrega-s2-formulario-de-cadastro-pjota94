import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Card from "../../components/Login/Card";
import Logo from "../../components/Login/Logo";
import { AuthContext } from "../../context/UserContext";
import { Loading } from "../Home/styles";
import { Container } from "./styles";

const Login = () => {
  const { userResponse, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register", { replace: true });
  };

  if (loading)
    return (
      <Loading>
        <p>Carregando...</p>
      </Loading>
    );

  return userResponse ? (
    <Navigate to="/home" replace />
  ) : (
    <>
      <Container>
        <Logo />
        <Card handleRegister={handleRegister}></Card>
      </Container>
    </>
  );
};

export default Login;
