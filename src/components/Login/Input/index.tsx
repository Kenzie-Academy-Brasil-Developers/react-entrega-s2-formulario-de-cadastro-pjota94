import { Container, Error } from "./styles";
import { AiOutlineAlert } from "react-icons/ai";
import { FieldError, UseFormRegister } from "react-hook-form";
import { ILoginProps } from "../../../context/UserContext";

interface IInputLoginProps {
  id: string;
  placeholder: string;
  type?: string;
  name: "email" | "password";
  error: FieldError | undefined;
  register: UseFormRegister<ILoginProps>;
}

const Input = ({
  id,
  register,
  error,
  placeholder,
  type,
  name,
}: IInputLoginProps) => {
  return (
    <Container>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
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
