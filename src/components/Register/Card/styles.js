import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(33, 37, 41, 1);
  width: 23.125rem;
  height: 53.699rem;
  border-radius: 4px;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .tittle {
    margin-bottom: 1.375rem;
    margin-top: 2.5rem;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: rgba(248, 249, 250, 1);
  }

  span {
    color: rgba(134, 142, 150, 1);
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 430px) {
    width: 18.5rem;
  }
`;
