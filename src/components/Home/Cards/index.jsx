import { Container } from "./styles";

const Cards = ({ title, status }) => {
  return (
    <Container>
      <div className="card">
        <p>{title}</p>
        <span>{status}</span>
      </div>
    </Container>
  );
};

export default Cards;
