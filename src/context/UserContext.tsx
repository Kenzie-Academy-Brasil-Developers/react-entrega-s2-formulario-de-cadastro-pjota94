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
import api from "../services/api";

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
  userResponse: null;
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
  setUser: Dispatch<SetStateAction<null>>;
}

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

export const AuthContext = createContext<IValuesProps>({} as IValuesProps);

const UserContext = ({ children }: IProviderProps) => {
  const [userResponse, setUser] = useState<null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [techs, setTechs] = useState<ICreateTechsProps[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isModalEdit, setIsModalEdit] = useState<boolean>(false);
  const [idCard, setIdCard] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenzie:token");

      if (token) {
        try {
          api.defaults.headers = {
            Authorization: `Bearer ${token}`,
          } as CommonHeaderProperties;
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

  const onLogin = (data: ILoginProps) => {
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
      .post("/users", data)
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;