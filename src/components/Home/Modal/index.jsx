import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../context/UserContext";
import DivTop from "../DivTop";
import Form from "../Form";
import { Container } from "./styles";

const Modal = () => {
  const { setIsModal } = useContext(AuthContext);
  const modalRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
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
        <DivTop setIsModal={setIsModal} />
        <Form />
      </div>
    </Container>
  );
};

export default Modal;
