import styled from "styled-components";

export const Container = styled.div`
  width: 23.062rem;
  height: 3.125rem;
  background-color: rgb(52, 59, 65);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px 4px 0px 0px;

  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #f8f9fa;
    margin-left: 1.25rem;
  }

  button {
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #868e96;
    margin-right: 1.25rem;
    border: none;
    background-color: transparent;
  }
`;
