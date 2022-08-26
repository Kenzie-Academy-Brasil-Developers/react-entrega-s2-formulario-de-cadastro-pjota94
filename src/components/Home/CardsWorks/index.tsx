import { ICreateWorks } from "../FormWorks";
import { Container } from "./styles";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useContext } from "react";
import { AuthTechs } from "../../../context/TechContext";
import { AuthContext } from "../../../context/UserContext";

const CardsWorks = ({ title, id, description, deploy_url }: ICreateWorks) => {
  const { deleteWork } = useContext(AuthTechs);
  const { setIsModalEditWork, setIdCard } = useContext(AuthContext);

  const abrirModal = (event: React.FormEvent<HTMLButtonElement>) => {
    setIsModalEditWork(true);
    setIdCard(event.currentTarget.id);
  };

  return (
    <Container>
      <div id={id} className="div-work">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="buttons-work">
          <a href={deploy_url} target="_blank">
            <HiOutlineExternalLink />
          </a>
          <button id={id} onClick={abrirModal}>
            <AiFillEdit />
          </button>
          <button
            id={id}
            onClick={(event: React.FormEvent<HTMLButtonElement>) =>
              deleteWork(event)
            }
          >
            <MdOutlineDeleteOutline />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CardsWorks;
