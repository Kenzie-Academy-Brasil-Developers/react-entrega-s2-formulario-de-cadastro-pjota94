import TechContexts from "../../context/TechContext";
import UserContext, { IProviderProps } from "../../context/UserContext";

const Providers = ({ children }: IProviderProps) => {
  return (
    <>
      <UserContext>
        <TechContexts>{children}</TechContexts>
      </UserContext>
    </>
  );
};

export default Providers;
