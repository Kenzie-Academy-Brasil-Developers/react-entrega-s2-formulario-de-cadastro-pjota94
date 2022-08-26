import styled from "styled-components";

export const Container = styled.div`
  width: 23.125rem;
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 2.437rem 0;

  button {
    background-color: rgba(33, 37, 41, 1);
    border: none;
    border-radius: 4px;
    width: 4.218rem;
    height: 2.506rem;
    font-weight: 600;
    font-size: 12px;
    color: rgba(248, 249, 250, 1);
  }
  button:hover {
    background-color: rgb(52, 59, 65);
    border: 1px solid rgba(248, 249, 250, 1);
    border-bottom: 3px solid rgba(248, 249, 250, 1);
  }

  @media (max-width: 430px) {
    width: 18.5rem;
  }
`;
