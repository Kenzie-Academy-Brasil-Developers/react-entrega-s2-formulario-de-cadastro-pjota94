import styled from "styled-components";

export const Container = styled.div`
  border-bottom: solid 1px rgba(134, 142, 150, 0.3);
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    justify-content: space-between;
    width: 62.5rem;
  }

  button {
    background-color: rgba(33, 37, 41, 1);
    border: none;
    border-radius: 4px;
    width: 3.437rem;
    height: 2rem;
    font-weight: 600;
    font-size: 12px;
    color: rgba(248, 249, 250, 1);
  }

  button:hover {
    background-color: rgba(52, 59, 65, 1);
  }

  @media (max-width: 1031px) {
    div {
      width: 46.5rem;
    }
  }

  @media (max-width: 792px) {
    div {
      width: 32.5rem;
    }
  }

  @media (max-width: 550px) {
    div {
      width: 23.5rem;
    }
  }

  @media (max-width: 401px) {
    div {
      width: 18.5rem;
    }
  }
`;
