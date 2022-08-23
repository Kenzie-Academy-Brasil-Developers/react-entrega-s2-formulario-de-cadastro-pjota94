import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../context/UserContext";
import DivTopEditar from "../DivTopEditar";
import FormEditar from "../FormEditar";
import { Container } from "./styles";

const ModalEditar = () => {
  const { setIsModalEdit } = useContext(AuthContext);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      if (!modalRef.current?.contains(target)) {
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
        <FormEditar />
      </div>
    </Container>
  );
};

export default ModalEditar;
