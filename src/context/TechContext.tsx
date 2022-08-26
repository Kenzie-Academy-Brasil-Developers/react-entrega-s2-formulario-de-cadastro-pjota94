import { createContext, useContext } from "react";
import api from "../services/api";
import {
  AuthContext,
  CommonHeaderProperties,
  ICreateTechsProps,
  IProviderProps,
} from "./UserContext";
import { toast } from "react-toastify";
import {
  IAxiosCreate,
  IAxiosUpdate,
  ICreateWorksProp,
  IUpdateWorksProp,
} from "../services/interfacesUser";
import { ICreateWorks } from "../components/Home/FormWorks";

export interface IUpdateProps {
  status: string;
}

export interface IUpdateWorks {
  title: string;
  description: string;
}

interface IValuesProps {
  createTech: (data: ICreateTechsProps) => void;
  updateTech: (data: IUpdateProps) => void;
  deleteTech: (event: React.FormEvent<HTMLButtonElement>) => void;
  createWorks: (data: ICreateWorks) => void;
  deleteWork: (event: React.FormEvent<HTMLButtonElement>) => void;
  updateWork: (data: IUpdateWorks) => void;
}

export const AuthTechs = createContext<IValuesProps>({} as IValuesProps);

const TechContexts = ({ children }: IProviderProps) => {
  const {
    techs,
    setTechs,
    setIsModal,
    idCard,
    setIsModalEdit,
    setIsModalWorks,
    works,
    setWorks,
    setIsModalEditWork,
  } = useContext(AuthContext);
  const token = localStorage.getItem("@kenzie:token");

  const createTech = async (data: ICreateTechsProps) => {
    try {
      // api.defaults.headers.authorization = `Bearer ${token}`; <-- Comentário mantido por questão didática.
      api.defaults.headers = {
        Authorization: `Bearer ${token}`,
      } as CommonHeaderProperties;
      const { data: newData } = await api.post<IAxiosCreate>(
        "/users/techs",
        data
      );
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

  const createWorks = async (data: ICreateWorks) => {
    try {
      api.defaults.headers = {
        Authorization: `Bearer ${token}`,
      } as CommonHeaderProperties;
      const { data: newData } = await api.post<ICreateWorksProp>(
        "/users/works",
        data
      );
      setWorks([newData, ...works]);
      setIsModalWorks(false);
      toast.success("Trabalho Adicionado!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
      toast.error("Você já adicionou este Trabalho!", {
        theme: "dark",
      });
    }
  };

  const deleteTech = async (event: React.FormEvent<HTMLButtonElement>) => {
    const currentTarget = event.currentTarget;
    const idCard = currentTarget.id;

    const filterDel = techs.filter(({ id }) => {
      return id !== idCard;
    });

    try {
      api.defaults.headers = {
        Authorization: `Bearer ${token}`,
      } as CommonHeaderProperties;
      const response = await api.delete<"">(`/users/techs/${idCard}`);
      setTechs(filterDel);
      toast.info("Trabalho Deletado!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWork = async (event: React.FormEvent<HTMLButtonElement>) => {
    const currentTarget = event.currentTarget;
    const idCard = currentTarget.id;

    const filterDel = works.filter(({ id }) => {
      return id !== idCard;
    });

    try {
      api.defaults.headers = {
        Authorization: `Bearer ${token}`,
      } as CommonHeaderProperties;
      const response = await api.delete<"">(`/users/works/${idCard}`);
      setWorks(filterDel);
      toast.info("Trabalho Deletado!", {
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
      const { data: newData } = await api.put<IAxiosUpdate>(
        `/users/techs/${idCard}`,
        data
      );
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

  const updateWork = async (data: IUpdateWorks) => {
    try {
      api.defaults.headers = {
        Authorization: `Bearer ${token}`,
      } as CommonHeaderProperties;
      const { data: newData } = await api.put<IUpdateWorksProp>(
        `/users/works/${idCard}`,
        data
      );
      const update = works.filter(({ id }) => {
        return id !== idCard;
      });
      setWorks([newData, ...update]);
      setIsModalEditWork(false);
      toast.info("Trabalho Editado!.", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthTechs.Provider
      value={{
        createTech,
        deleteTech,
        updateTech,
        createWorks,
        deleteWork,
        updateWork,
      }}
    >
      {children}
    </AuthTechs.Provider>
  );
};

export default TechContexts;
