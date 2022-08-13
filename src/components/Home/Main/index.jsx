import { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
import Cards from "../Cards";
import MainVazio from "../MainVazio";
import { Container } from "./styles";

const Main = ({ setDadosUser }) => {
  const { techs, setIsModal } = useContext(AuthContext);

  const abrirModal = () => {
    setIsModal(true);
  };

  const lengthArray = techs.length;

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
            {techs.map((elem, index) => (
              <Cards
                id={elem.id}
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
