import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Home/Header";
import Main from "../../components/Home/Main";
import MainVazio from "../../components/Home/MainVazio";
import Modal from "../../components/Home/Modal";
import NavBar from "../../components/Home/NavBar";
import { Container } from "./styles";

const Home = () => {
  const [isModal, setIsModal] = useState(false);
  const [dadosUser, setDadosUser] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/", { replace: true });
  };
  // const lengthArray = dadosUser.techs.length;
  return (
    <>
      <Container>
        <NavBar handleLogin={handleLogin} />
        <Header dadosUser={dadosUser} setDadosUser={setDadosUser} />

        <Main
          setIsModal={setIsModal}
          dadosUser={dadosUser}
          setDadosUser={setDadosUser}
        />
      </Container>
      {isModal && <Modal setIsModal={setIsModal} />}
    </>
  );
};

export default Home;
