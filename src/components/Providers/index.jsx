import TechContexts from "../../context/TechContext";
import UserContext from "../../context/UserContext";

const Providers = ({ children }) => {
  return (
    <>
      <UserContext>
        <TechContexts>{children}</TechContexts>
      </UserContext>
    </>
  );
};

export default Providers;
