import { Container } from "./styles";
import logo from "../../../assets/Logo.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
const NavBar = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    window.localStorage.clear();
    toast.success("Usuário Deslogado", {
      theme: "dark",
    });
    setUser(null);
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
