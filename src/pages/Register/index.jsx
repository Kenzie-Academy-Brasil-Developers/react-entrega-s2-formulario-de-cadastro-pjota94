import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Card from "../../components/Register/Card";
import DivAuxiliar from "../../components/Register/DivAuxiliar";
import { AuthContext } from "../../context/UserContext";
import { Loading } from "../Home/styles";
import { Container } from "./styles";

const Register = () => {
  const { userResponse, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home", { replace: true });
  };
  const handleInicio = () => {
    navigate("/", { replace: true });
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
      <Container className="test">
        <DivAuxiliar handleInicio={handleInicio} />
        <Card handleHome={handleHome} />
      </Container>
    </>
  );
};

export default Register;
