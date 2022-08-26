import { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
import Cards from "../Cards";
import CardsWorks from "../CardsWorks";
import MainVazio from "../MainVazio";
import MainVazioWorks from "../MainVazioWorks";
import { Container, ContainerWork } from "./styles";

const Main = () => {
  const { techs, setIsModal, setIsModalWorks, works } = useContext(AuthContext);
  const lengthArrayTechs = techs.length;
  const lengthArrayWorks = works.length;

  const abrirModal = () => {
    setIsModal(true);
  };

  const abrirModalWork = () => {
    setIsModalWorks(true);
  };

  return (
    <>
      <Container>
        <div>
          <button className="tech">Tecnologias</button>

          <button className="btn-add" onClick={abrirModal}>
            +
          </button>
        </div>

        {lengthArrayTechs > 0 ? (
          <div className="box-cards">
            {techs.map((elem, index) => (
              <Cards
                id={elem.id}
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

      <ContainerWork>
        <div className="div-button">
          <button className="tech">Trabalhos</button>

          <button className="btn-add" onClick={abrirModalWork}>
            +
          </button>
        </div>

        {lengthArrayWorks > 0 ? (
          <div className="box-cards-work">
            {works.map((elem, index) => (
              <CardsWorks
                key={index}
                title={elem.title}
                description={elem.description}
                deploy_url={elem.deploy_url}
                id={elem.id}
              />
            ))}
          </div>
        ) : (
          <MainVazioWorks />
        )}
      </ContainerWork>
    </>
  );
};

export default Main;
