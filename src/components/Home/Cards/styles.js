import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .card {
    width: 61rem;
    height: 2.125rem;
    background-color: rgb(18, 18, 20);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    border-radius: 4.06066px;
  }

  .card:hover {
    background-color: rgba(52, 59, 65, 1);
  }

  p {
    margin-left: 0.5rem;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #f8f9fa;
  }

  span {
    margin-right: 0.5rem;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: #868e96;
  }

  button {
    color: #868e96;
    background-color: transparent;
    border: none;
  }

  button:hover {
    color: #f8f9fa;
  }

  .auxiliar {
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    cursor: pointer;
  }

  @media (max-width: 1031px) {
    .card {
      width: 45rem;
    }
  }

  @media (max-width: 792px) {
    .card {
      width: 31.5rem;
    }
  }

  @media (max-width: 550px) {
    .card {
      width: 22.5rem;
    }
  }

  @media (max-width: 401px) {
    .card {
      width: 16.5rem;
    }
  }
`;
