import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;

  .label-email {
    font-weight: 400;
    font-size: 12.182px;
    color: rgba(245, 245, 245, 1);
    margin-bottom: 1rem;
  }

  .label-senha {
    font-weight: 400;
    font-size: 12.182px;
    color: rgba(245, 245, 245, 1);
    margin: 1.325rem 0 1rem 0;
  }

  input {
    border-radius: 4px;
    background-color: rgb(52, 59, 65);
    width: 20.62rem;
    height: 3rem;
    padding-left: 1.014rem;
    color: #f8f9fa;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    border: none;
  }
  input:focus {
    border: 1.2182px solid #f8f9fa;
  }

  input::placeholder {
    color: rgb(134, 142, 150);
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
  }

  button {
    margin-top: 1.5rem;
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
`;
