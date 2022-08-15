import { Container, Error } from "./styles";
import { AiOutlineAlert } from "react-icons/ai";

const Input = ({ id, register, error, placeholder, type }) => {
  return (
    <Container>
      <input id={id} type={type} placeholder={placeholder} {...register(id)} />
      {error?.message && (
        <Error>
          <AiOutlineAlert />
          <span>{error.message}</span>
        </Error>
      )}
    </Container>
  );
};

export default Input;
