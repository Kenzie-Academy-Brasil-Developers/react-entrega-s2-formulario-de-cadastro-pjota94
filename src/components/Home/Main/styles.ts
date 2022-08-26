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

  .buttons {
    display: flex;
    align-content: center;
    justify-content: flex-start;
    gap: 15px;
  }

  .tech {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: rgba(248, 249, 250, 1);
    margin-bottom: 1.437rem;
    margin-top: 2.312rem;
    border: none;
    background-color: rgb(33, 37, 41);
    border-radius: 4px;
    width: 8rem;
    height: 2rem;
    cursor: auto;
  }

  .tech:hover {
    background-color: rgb(52, 59, 65);
    border: 1px solid rgba(248, 249, 250, 1);
    border-bottom: 3px solid rgba(248, 249, 250, 1);
  }

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
  }

  @media (max-width: 1031px) {
    div {
      width: 46.5rem;
    }

    .box-cards {
      width: 46.5rem;
    }
  }

  @media (max-width: 792px) {
    div {
      width: 32.5rem;
    }
    .box-cards {
      width: 32.5rem;
    }
  }

  @media (max-width: 550px) {
    div {
      width: 23.5rem;
    }

    .box-cards {
      width: 23.5rem;
    }
  }

  @media (max-width: 401px) {
    div {
      width: 18.5rem;
    }

    .box-cards {
      width: 18.5rem;
    }
  }
`;

export const ContainerWork = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .div-button {
    width: 62.5rem;
    display: flex;
    justify-content: space-between;
  }

  .buttons {
    display: flex;
    align-content: center;
    justify-content: flex-start;
    gap: 15px;
  }

  .tech {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: rgba(248, 249, 250, 1);
    margin-bottom: 1.437rem;
    margin-top: 2.312rem;
    border: none;
    background-color: rgb(33, 37, 41);
    border-radius: 4px;
    width: 8rem;
    height: 2rem;
    cursor: auto;
  }

  .tech:hover {
    background-color: rgb(52, 59, 65);
    border: 1px solid rgba(248, 249, 250, 1);
    border-bottom: 3px solid rgba(248, 249, 250, 1);
  }

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

  .box-cards-work {
    width: 62.5rem;
    background-color: rgb(33, 37, 41);
    border-radius: 2.85739px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
    margin-bottom: 25px;
  }

  @media (max-width: 1031px) {
    .div-button {
      width: 46.5rem;
    }

    .box-cards-work {
      width: 46.5rem;
    }
  }

  @media (max-width: 792px) {
    .div-button {
      width: 32.5rem;
    }
    .box-cards-work {
      width: 32.5rem;
    }
  }

  @media (max-width: 550px) {
    .div-button {
      width: 23.5rem;
    }

    .box-cards-work {
      width: 23.5rem;
    }
  }

  @media (max-width: 401px) {
    .div-button {
      width: 18.5rem;
    }

    .box-cards-work {
      width: 18.5rem;
    }
  }
`;
