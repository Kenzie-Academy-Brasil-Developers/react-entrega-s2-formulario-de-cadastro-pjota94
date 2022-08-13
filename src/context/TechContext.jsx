import { createContext, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "./UserContext";
import { toast } from "react-toastify";

export const AuthTechs = createContext({});

const TechContexts = ({ children }) => {
  const { techs, setTechs, setIsModal, idCard, setIsModalEdit } =
    useContext(AuthContext);
  const token = localStorage.getItem("@kenzie:token");

  const createTech = async (data) => {
    try {
      const { data: newData } = await api.post("/users/techs", data);
      api.defaults.headers.authorization = `Bearer ${token}`;
      setTechs([newData, ...techs]);
      setIsModal(false);
      toast.success("Tecnologia Adicionada!", {
        theme: "dark",
      });
    } catch (error) {
      toast.error("Você já adicionou está Tecnologia!", {
        theme: "dark",
      });
    }
  };

  const deleteTech = async (e) => {
    const idCard = e.currentTarget.id;

    const filterDel = techs.filter(({ id }) => {
      return id !== idCard;
    });

    try {
      const response = await api.delete(`/users/techs/${idCard}`);
      console.log(response);
      api.defaults.headers.authorization = `Bearer ${token}`;
      setTechs(filterDel);
      toast.info("Tecnologia Deletada!", {
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateTech = async (data) => {
    try {
      const { data: newData } = await api.put(`/users/techs/${idCard}`, data);
      api.defaults.headers.authorization = `Bearer ${token}`;
      console.log(newData);
      const update = techs.filter(({ id }) => {
        return id !== idCard;
      });
      setTechs([newData, ...update]);
      setIsModalEdit(false);
      toast.info("Nivel Alterado.", {
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthTechs.Provider value={{ createTech, deleteTech, updateTech }}>
      {children}
    </AuthTechs.Provider>
  );
};

export default TechContexts;
