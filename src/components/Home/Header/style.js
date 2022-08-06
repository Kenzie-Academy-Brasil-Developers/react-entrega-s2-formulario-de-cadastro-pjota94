import styled from "styled-components";

export const Container = styled.div`
  height: 7.375rem;
  border-bottom: solid 1px rgba(134, 142, 150, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 62.5rem;
    display: flex;
    justify-content: space-between;
  }

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: rgba(248, 249, 250, 1);
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: rgba(134, 142, 150, 1);
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
      flex-direction: column;
    }
    p {
      margin-bottom: 10px;
    }
  }
`;
