import { Container } from "./style";
import api from "../../../services/api";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Header = ({ dadosUser, setDadosUser }) => {
  const idUser = window.localStorage.getItem("@kenzie:id");

  useEffect(() => {
    api
      .get(`/users/${idUser}`)
      .then((response) => {
        setDadosUser(response.data);
      })
      .catch((err) => console.log(err));
  }, [idUser]);

  return (
    <Container>
      {dadosUser ? (
        <div>
          <p>{dadosUser.name}</p>
          <span>{dadosUser.course_module}</span>
        </div>
      ) : (
        <div>
          <p className="loading">
            <AiOutlineLoading3Quarters />
          </p>
          <span className="loading">
            <AiOutlineLoading3Quarters />
          </span>
        </div>
      )}
    </Container>
  );
};

export default Header;
