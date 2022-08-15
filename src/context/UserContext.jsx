import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const AuthContext = createContext({});

const UserContext = ({ children }) => {
  const [userResponse, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [techs, setTechs] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [idCard, setIdCard] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenzie:token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUser(data);
          setTechs(data.techs);
        } catch (error) {
          window.localStorage.clear();
        }
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  const onLogin = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        const { user, token } = res.data;
        window.localStorage.clear();
        window.localStorage.setItem("@kenzie:token", token);
        window.localStorage.setItem("@kenzie:id", user.id);
        setUser(user);
        setTechs(user.techs);
        navigate("/home", { replace: true });
        toast.success("Usuário logado com sucesso", {
          theme: "dark",
        });
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error("E-mail ou Senha Inválido", {
          theme: "dark",
        });
      });
  };

  const onRegister = (data) => {
    api
      .post("/users", data)
      .then((res) => {
        console.log(res);
        navigate("/", { replace: true });
        toast.success("Conta criada com sucesso! ;)", {
          theme: "dark",
        });
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error("Ops! Algo deu errado", {
          theme: "dark",
        });
      });
  };

  return (
    <AuthContext.Provider
      value={{
        onLogin,
        onRegister,
        userResponse,
        loading,
        techs,
        setTechs,
        isModal,
        setIsModal,
        isModalEdit,
        setIsModalEdit,
        idCard,
        setIdCard,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
