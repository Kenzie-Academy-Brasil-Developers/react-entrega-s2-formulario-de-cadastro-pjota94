import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 400;
    font-size: 12.182px;
    color: rgba(248, 249, 250, 1);
    margin-bottom: 1rem;
  }

  input {
    background-color: rgba(52, 59, 65, 1);
    border: none;
    border-radius: 4px;
    width: 20.62rem;
    height: 3rem;
    padding-left: 1.014rem;
  }

  input:focus {
    color: rgba(248, 249, 250, 1);
  }

  input::placeholder {
    color: rgb(134, 142, 150);
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
  }

  select {
    background-color: rgba(52, 59, 65, 1);
    border: none;
    border-radius: 4px;
    width: 20.62rem;
    height: 3rem;
    color: rgb(134, 142, 150);
    margin-bottom: 1.25rem;
    padding-left: 1.014rem;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
  }

  button {
    background-color: rgba(255, 87, 127, 1);
    width: 20.62rem;
    height: 3rem;
    border-radius: 4.06066px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: rgba(245, 245, 245, 1);
  }

  button:hover {
    background-color: rgba(89, 50, 63, 1);
  }
  .error {
    color: rgba(255, 87, 127, 1);
    font-size: 10px;
  }

  @media (max-width: 430px) {
    input {
      width: 16.5rem;
    }

    input::placeholder {
      font-size: 13px;
    }

    select {
      width: 16.5rem;
      font-size: 13px;
    }

    button {
      width: 16.5rem;
    }
  }
`;
