import { HeadersDefaults } from "axios";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ICreateWorks } from "../components/Home/FormWorks";
import api from "../services/api";
import { IAxiosLogin, IAxiosProfile } from "../services/interfacesUser";

export interface IProviderProps {
  children: ReactNode;
}

export interface IRegisterProps {
  email: string;
  password: number;
  ConfirmedPassword?: number;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface ILoginProps {
  email: string;
  password: number;
}

export interface ICreateTechsProps {
  title?: string;
  status: string;
  id?: string;
}

interface IValuesProps {
  userResponse: IAxiosProfile | null;
  loading: boolean;
  techs: ICreateTechsProps[];
  isModal: boolean;
  isModalEdit: boolean;
  idCard: string;
  onLogin: (data: ILoginProps) => void;
  onRegister: (data: IRegisterProps) => void;
  setTechs: Dispatch<SetStateAction<ICreateTechsProps[]>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setIsModalEdit: Dispatch<SetStateAction<boolean>>;
  setIdCard: Dispatch<SetStateAction<string>>;
  setUser: Dispatch<SetStateAction<IAxiosProfile | null>>;
  isModalWorks: boolean;
  setIsModalWorks: Dispatch<SetStateAction<boolean>>;
  works: ICreateWorks[];
  setWorks: Dispatch<SetStateAction<ICreateWorks[]>>;
  isModalEditWork: boolean;
  setIsModalEditWork: Dispatch<SetStateAction<boolean>>;
}

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

export const AuthContext = createContext<IValuesProps>({} as IValuesProps);

const UserContext = ({ children }: IProviderProps) => {
  const [userResponse, setUser] = useState<IAxiosProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [techs, setTechs] = useState<ICreateTechsProps[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isModalEdit, setIsModalEdit] = useState<boolean>(false);
  const [idCard, setIdCard] = useState<string>("");
  const [isModalWorks, setIsModalWorks] = useState<boolean>(false);
  const [works, setWorks] = useState<ICreateWorks[]>([]);
  const [isModalEditWork, setIsModalEditWork] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenzie:token");

      if (token) {
        try {
          api.defaults.headers = {
            Authorization: `Bearer ${token}`,
          } as CommonHeaderProperties;
          const { data } = await api.get<IAxiosProfile>("/profile");
          setUser(data);
          setTechs(data.techs);
          setWorks(data.works);
          console.log(works);
        } catch (error) {
          window.localStorage.clear();
        }
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  const onLogin = (data: ILoginProps) => {
    api
      .post<IAxiosLogin>("/sessions", data)
      .then((res) => {
        const { user, token } = res.data;
        window.localStorage.clear();
        window.localStorage.setItem("@kenzie:token", token);
        window.localStorage.setItem("@kenzie:id", user.id);
        setUser(user);
        setTechs(user.techs);
        navigate("/home", { replace: true });
        toast.success("Usuário logado com sucesso", {
          position: toast.POSITION.TOP_CENTER,
          theme: "dark",
        });
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error("E-mail ou Senha Inválido", {
          position: toast.POSITION.TOP_CENTER,
          theme: "dark",
        });
      });
  };

  const onRegister = (data: IRegisterProps) => {
    api
      .post<IAxiosProfile>("/users", data)
      .then((res) => {
        console.log(res);
        navigate("/", { replace: true });
        toast.success("Conta criada com sucesso! ;)", {
          position: toast.POSITION.TOP_CENTER,
          theme: "dark",
        });
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error("Ops! Algo deu errado", {
          position: toast.POSITION.TOP_CENTER,
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
        setUser,
        isModalWorks,
        setIsModalWorks,
        works,
        setWorks,
        isModalEditWork,
        setIsModalEditWork,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
