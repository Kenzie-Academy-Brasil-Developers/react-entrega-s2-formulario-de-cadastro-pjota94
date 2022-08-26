import styled from "styled-components";

export const Container = styled.div`
  width: 11rem;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  animation: myAnim 1s ease 0s 1 normal forwards;

  @keyframes myAnim {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .div-work {
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgb(52, 59, 65);
    border-radius: 4px;
    background-color: rgb(18, 18, 20);
    padding: 2px;
  }

  .div-work:hover {
    background-color: rgba(52, 59, 65, 1);
  }

  h3 {
    color: #f8f9fa;
    margin-top: 10px;
    font-size: 15px;
  }

  p {
    color: #868e96;
    font-size: 12px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #868e96;
  }
  a:hover {
    color: #f8f9fa;
  }

  .buttons-work {
    width: 100px;
    display: flex;
    justify-content: space-evenly;
  }

  button {
    border: none;
    background-color: transparent;
    color: #868e96;
  }
  button:hover {
    color: #f8f9fa;
  }
`;
