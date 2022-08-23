import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../context/UserContext";
import DivTop from "../DivTop";
import Form from "../Form";
import { Container } from "./styles";

const Modal = () => {
  const { setIsModal } = useContext(AuthContext);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      if (!modalRef.current?.contains(target)) {
        setIsModal(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setIsModal]);

  return (
    <Container>
      <div className="modal-box" ref={modalRef}>
        <DivTop />
        <Form />
      </div>
    </Container>
  );
};

export default Modal;
