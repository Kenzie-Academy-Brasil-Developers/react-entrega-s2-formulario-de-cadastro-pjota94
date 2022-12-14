import styled from "styled-components";

export const Container = styled.div`
  width: 23.062rem;
  height: 31.375rem;
  background-color: rgba(33, 37, 41, 1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: myAnim 1s ease 0s 1 normal forwards;

  @keyframes myAnim {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  .tittle {
    font-weight: 700;
    font-size: 18px;
    color: rgba(248, 249, 250, 1);
    margin: 2.625rem 0 1.75rem 0;
  }

  span {
    color: rgba(134, 142, 150, 1);
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    margin: 2.125rem 0 1.375rem 0;
  }

  @media (max-width: 430px) {
    width: 18.5rem;
  }
`;
