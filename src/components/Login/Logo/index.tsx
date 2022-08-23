import logoHub from "../../../assets/Logo.svg";
import { Container } from "./styles";
const Logo = () => {
  return (
    <Container>
      <img src={logoHub} alt="logo" />
    </Container>
  );
};

export default Logo;
