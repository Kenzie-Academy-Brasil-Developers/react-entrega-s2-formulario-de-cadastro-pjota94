import { Container, Error } from "./styles";
import { AiOutlineAlert } from "react-icons/ai";
import { FieldError, UseFormRegister } from "react-hook-form";
import { IRegisterProps } from "../../../context/UserContext";

interface IInputRegisterProps {
  id: string;
  register: UseFormRegister<IRegisterProps>;
  error: FieldError | undefined;
  placeholder: string;
  type?: string;
  name:
    | "name"
    | "email"
    | "password"
    | "ConfirmedPassword"
    | "bio"
    | "contact"
    | "course_module";
}

const InputRegister = ({
  id,
  register,
  error,
  placeholder,
  type,
  name,
}: IInputRegisterProps) => {
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

export default InputRegister;
