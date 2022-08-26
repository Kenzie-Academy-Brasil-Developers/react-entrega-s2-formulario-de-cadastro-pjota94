import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../context/UserContext";
import DivTopEditWork from "../DivTopEditWork";
import FormEditWork from "../FormEditarWork";
import { Container } from "./styles";

const ModalEditWork = () => {
  const { setIsModalEditWork } = useContext(AuthContext);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      if (!modalRef.current?.contains(target)) {
        setIsModalEditWork(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setIsModalEditWork]);

  return (
    <Container>
      <div className="modal-edit" ref={modalRef}>
        <DivTopEditWork />
        <FormEditWork />
      </div>
    </Container>
  );
};

export default ModalEditWork;
