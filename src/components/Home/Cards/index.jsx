import { Container } from "./styles";
import { FiTrash } from "react-icons/fi";

const Cards = ({ title, status, id, setIsModalEdit, setIdCard }) => {
  const abrirModal = (e) => {
    if (e.target.id !== "") {
      setIsModalEdit(true);
      setIdCard(e.target.id);
    }
  };

  const token = window.localStorage.getItem("@kenzie:token");

  const handleDelete = (e) => {
    const idCard = e.currentTarget.id;
    fetch(`https://kenziehub.herokuapp.com/users/techs/${idCard}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        window.location.reload(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <div className="card">
        <p>{title}</p>
        <div className="auxiliar" onClick={abrirModal} id={id}>
          <span>{status}</span>
          <button onClick={handleDelete} id={id}>
            <FiTrash />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Cards;
