import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  div {
    width: 62.5rem;
    display: flex;
    justify-content: space-between;
  }

  .tech {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: rgba(248, 249, 250, 1);
    margin-bottom: 1.437rem;
    margin-top: 2.312rem;
  }

  /* span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(248, 249, 250, 1);
  } */

  .btn-add {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: rgba(248, 249, 250, 1);
    margin-bottom: 1.437rem;
    margin-top: 2.312rem;
    border: none;
    background-color: rgb(33, 37, 41);
    border-radius: 4px;
    width: 2rem;
    height: 2rem;
  }

  .btn-add:hover {
    background-color: rgb(52, 59, 65);
    border: 1px solid rgba(248, 249, 250, 1);
    border-bottom: 3px solid rgba(248, 249, 250, 1);
  }

  .box-cards {
    width: 62.5rem;
    background-color: rgb(33, 37, 41);
    border-radius: 2.85739px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
    margin-bottom: 15px;
  }
`;
