import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Home/Header";
import Main from "../../components/Home/Main";
import MainVazio from "../../components/Home/MainVazio";
import Modal from "../../components/Home/Modal";
import ModalEditar from "../../components/Home/ModalEditar";
import NavBar from "../../components/Home/NavBar";
import { Container } from "./styles";

const Home = () => {
  const [isModal, setIsModal] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [dadosUser, setDadosUser] = useState("");
  const [idCard, setIdCard] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <Container>
        <NavBar handleLogin={handleLogin} />
        <Header dadosUser={dadosUser} setDadosUser={setDadosUser} />

        <Main
          setIsModal={setIsModal}
          dadosUser={dadosUser}
          setDadosUser={setDadosUser}
          setIsModalEdit={setIsModalEdit}
          setIdCard={setIdCard}
        />
      </Container>
      {isModal && <Modal setIsModal={setIsModal} />}
      {isModalEdit && (
        <ModalEditar setIsModalEdit={setIsModalEdit} idCard={idCard} />
      )}
    </>
  );
};

export default Home;
