import { useEffect, useState } from "react";
import api from "../../../services/api";
import Cards from "../Cards";
import MainVazio from "../MainVazio";
import { Container } from "./styles";

const Main = ({ setIsModal, dadosUser, setDadosUser }) => {
  const abrirModal = () => {
    setIsModal(true);
  };
  const idUser = window.localStorage.getItem("@kenzie:id");

  const [dadosTech, setDadosTech] = useState([]);

  useEffect(() => {
    api
      .get(`/users/${idUser}`)
      .then((response) => {
        setDadosTech(response.data.techs);
      })
      .catch((err) => console.log(err));
  }, [idUser]);
  const lengthArray = dadosTech.length;

  console.log(dadosTech);
  return (
    <>
      <Container>
        <div>
          <p className="tech">Tecnologias</p>
          <button className="btn-add" onClick={abrirModal}>
            +
          </button>
        </div>

        {lengthArray > 0 ? (
          <div className="box-cards">
            {dadosTech.map((elem, index) => (
              <Cards
                dadosUser={dadosUser}
                setDadosUser={setDadosUser}
                key={index}
                title={elem.title}
                status={elem.status}
              />
            ))}
          </div>
        ) : (
          <MainVazio />
        )}
      </Container>
    </>
  );
};

export default Main;
