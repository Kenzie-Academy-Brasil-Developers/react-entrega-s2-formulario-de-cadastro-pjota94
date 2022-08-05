import { Container } from "./styles";
import logo from "../../../assets/Logo.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.localStorage.clear();
    toast.success("Usuário Deslogado");
    navigate("/", { replace: true });
  };
  return (
    <Container>
      <div>
        <img src={logo} alt="logo" />
        <button onClick={handleLogin}>Sair</button>
      </div>
    </Container>
  );
};

export default NavBar;
