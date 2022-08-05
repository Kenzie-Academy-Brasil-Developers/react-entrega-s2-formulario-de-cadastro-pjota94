import styled from "styled-components";

export const Container = styled.div`
  width: 23.062rem;
  height: 19.25rem;
  background-color: rgb(33, 37, 41);
  display: flex;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: 400;
    font-size: 12.182px;
    color: #f8f9fa;
  }

  .nome {
    margin-top: 1.5rem;
    margin-bottom: 1.375rem;
  }

  .status {
    margin-bottom: 1.375rem;
    margin-top: 1.5rem;
  }

  input {
    width: 20.562rem;
    height: 3rem;
    border-radius: 4px;
    background: #343b41;
    border: none;
    padding-left: 1rem;
    /* margin-bottom: 1.5rem; */
  }

  input::placeholder {
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #868e96;
  }
  input:focus {
    border: 1.2182px solid #f8f9fa;
    color: #f8f9fa;
  }

  select {
    width: 20.562rem;
    height: 3rem;
    border-radius: 4px;
    background: #343b41;
    border: none;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #868e96;
    padding-left: 1rem;
    margin-bottom: 1.25rem;
  }

  select:focus {
    border: 1.2182px solid #f8f9fa;
    color: #f8f9fa;
  }

  button {
    width: 20.562rem;
    height: 3rem;
    background: #ff577f;
    border-radius: 4.06066px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
  }

  button:hover {
    background-color: rgba(89, 50, 63, 1);
  }

  .error {
    color: rgba(255, 87, 127, 1);
    font-size: 10px;
  }
`;
