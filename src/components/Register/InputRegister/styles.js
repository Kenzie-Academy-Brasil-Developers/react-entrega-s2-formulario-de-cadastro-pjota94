import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: rgb(52, 59, 65);
  align-items: center;
  border-radius: 4px;
  padding: 2px;
  margin-bottom: 10px;
  width: 20.62rem;

  :focus {
    border: 1.2182px solid #f8f9fa;
  }

  input {
    border: none;
    width: 100%;
  }

  svg {
    margin-right: 12px;
    color: white;
  }

  @media (max-width: 430px) {
    width: 263.99px;

    input::placeholder {
      font-size: 13px;
    }
  }
`;

export const Error = styled.div`
  position: relative;

  &:hover span {
    opacity: 1;
    transition: 0.4s;
    color: #f8f9fa;
  }

  span {
    position: absolute;
    background-color: rgba(255, 87, 127, 1);
    padding: 4px 15px;
    border-radius: 4px;
    top: -15px;
    left: 40px;
    opacity: 0;
    color: #f8f9fa;
    width: 100px;

    &::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0 7px;
      border-color: rgba(255, 87, 127, 1) transparent;
      position: absolute;
      transform: rotate(90deg);
      left: -9px;
      top: 21px;
      color: #f8f9fa;
    }
  }

  @media (max-width: 550px) {
    span {
      top: -67px;
      left: -41px;

      &::before {
        transform: rotate(360deg);
        left: 43px;
        top: 49px;
      }
    }
  }
`;
