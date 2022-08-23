import { createContext, useContext } from "react";
import api from "../services/api";
import {
  AuthContext,
  CommonHeaderProperties,
  ICreateTechsProps,
  IProviderProps,
} from "./UserContext";
import { toast } from "react-toastify";

export interface IUpdateProps {
  status: string;
}

interface IValuesProps {
  createTech: (data: ICreateTechsProps) => void;
  updateTech: (data: IUpdateProps) => void;
  deleteTech: (event: Event) => void;
}

export const AuthTechs = createContext<IValuesProps>({} as IValuesProps);

const TechContexts = ({ children }: IProviderProps) => {
  const { techs, setTechs, setIsModal, idCard, setIsModalEdit } =
    useContext(AuthContext);
  const token = localStorage.getItem("@kenzie:token");

  const createTech = async (data: ICreateTechsProps) => {
    try {
      // api.defaults.headers.authorization = `Bearer ${token}`; <-- Comentário mantido por questão didática.
      api.defaults.headers = {
        Authorization: `Bearer ${token}`,
      } as CommonHeaderProperties;
      const { data: newData } = await api.post("/users/techs", data);
      setTechs([newData, ...techs]);
      setIsModal(false);
      toast.success("Tecnologia Adicionada!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
      toast.error("Você já adicionou está Tecnologia!", {
        theme: "dark",
      });
    }
  };

  const deleteTech = async (event: Event) => {
    const currentTarget = event.currentTarget as HTMLButtonElement;
    const idCard = currentTarget.id;

    const filterDel = techs.filter(({ id }) => {
      return id !== idCard;
    });

    try {
      api.defaults.headers = {
        Authorization: `Bearer ${token}`,
      } as CommonHeaderProperties;
      const response = await api.delete(`/users/techs/${idCard}`);
      console.log(response);
      setTechs(filterDel);
      toast.info("Tecnologia Deletada!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateTech = async (data: IUpdateProps) => {
    try {
      api.defaults.headers = {
        Authorization: `Bearer ${token}`,
      } as CommonHeaderProperties;
      const { data: newData } = await api.put(`/users/techs/${idCard}`, data);
      console.log(newData);
      const update = techs.filter(({ id }) => {
        return id !== idCard;
      });
      setTechs([newData, ...update]);
      setIsModalEdit(false);
      toast.info("Nivel Alterado.", {
        position: toast.POSITION.BOTTOM_RIGHT,
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
