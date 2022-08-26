import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../context/UserContext";
import DivTopWorks from "../DivTopWorks";
import FormWorks from "../FormWorks";
import { Container } from "./styles";

const ModalWorks = () => {
  const { setIsModalWorks } = useContext(AuthContext);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      if (!modalRef.current?.contains(target)) {
        setIsModalWorks(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setIsModalWorks]);

  return (
    <Container>
      <div className="modal-box" ref={modalRef}>
        <DivTopWorks />
        <FormWorks />
      </div>
    </Container>
  );
};

export default ModalWorks;
