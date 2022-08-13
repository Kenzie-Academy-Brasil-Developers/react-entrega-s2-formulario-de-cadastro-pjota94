import { Container } from "./styles";
import { FiTrash } from "react-icons/fi";
import { useContext } from "react";
import { AuthTechs } from "../../../context/TechContext";
import { AuthContext } from "../../../context/UserContext";

const Cards = ({ title, status, id }) => {
  const { deleteTech } = useContext(AuthTechs);
  const { setIsModalEdit, setIdCard } = useContext(AuthContext);

  const abrirModal = (e) => {
    if (e.target.id !== "") {
      setIsModalEdit(true);
      setIdCard(e.target.id);
    }
  };

  return (
    <Container>
      <div className="card">
        <p>{title}</p>
        <div className="auxiliar" onClick={abrirModal} id={id}>
          <span>{status}</span>
          <button onClick={(e) => deleteTech(e)} id={id}>
            <FiTrash />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Cards;
