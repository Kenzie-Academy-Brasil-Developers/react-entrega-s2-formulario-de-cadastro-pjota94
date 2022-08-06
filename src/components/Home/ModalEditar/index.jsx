import DivTopEditar from "../DivTopEditar";
import FormEditar from "../FormEditar";
import { Container } from "./styles";

const ModalEditar = ({ setIsModalEdit, idCard }) => {
  return (
    <Container>
      <div className="modal-edit">
        <DivTopEditar setIsModalEdit={setIsModalEdit} />
        <FormEditar idCard={idCard} />
      </div>
    </Container>
  );
};

export default ModalEditar;
