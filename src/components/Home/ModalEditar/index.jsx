import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../context/UserContext";
import DivTopEditar from "../DivTopEditar";
import FormEditar from "../FormEditar";
import { Container } from "./styles";

const ModalEditar = ({ idCard }) => {
  const { setIsModalEdit } = useContext(AuthContext);
  const modalRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        setIsModalEdit(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setIsModalEdit]);

  return (
    <Container>
      <div className="modal-edit" ref={modalRef}>
        <DivTopEditar />
        <FormEditar idCard={idCard} />
      </div>
    </Container>
  );
};

export default ModalEditar;
