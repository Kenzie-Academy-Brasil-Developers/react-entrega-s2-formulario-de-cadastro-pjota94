import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../components/Home/Header";
import Main from "../../components/Home/Main";
import Modal from "../../components/Home/Modal";
import ModalEditar from "../../components/Home/ModalEditar";
import NavBar from "../../components/Home/NavBar";
import { AuthContext } from "../../context/UserContext";
import { Container, Loading } from "./styles";

const Home = () => {
  const { userResponse, loading, isModal, isModalEdit } =
    useContext(AuthContext);

  const [dadosUser, setDadosUser] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/", { replace: true });
  };

  if (loading)
    return (
      <Loading>
        <p>Carregando...</p>
      </Loading>
    );

  return userResponse ? (
    <>
      <Container>
        <NavBar handleLogin={handleLogin} />
        <Header dadosUser={dadosUser} setDadosUser={setDadosUser} />

        <Main dadosUser={dadosUser} setDadosUser={setDadosUser} />
      </Container>
      {isModal && <Modal />}
      {isModalEdit && <ModalEditar />}
    </>
  ) : (
    <Navigate to="/" replace />
  );
};

export default Home;
