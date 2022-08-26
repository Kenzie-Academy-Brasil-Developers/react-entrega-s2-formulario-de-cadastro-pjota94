import styled from "styled-components";

export const Container = styled.div`
  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 28px;
    color: #f8f9fa;
    margin-left: -499px;
  }

  @media (max-width: 1031px) {
    p {
      margin-left: -372px;
    }
  }

  @media (max-width: 792px) {
    p {
      margin-left: -261px;
    }
  }

  @media (max-width: 550px) {
    p {
      margin-left: -152px;
    }
  }

  @media (max-width: 401px) {
    p {
      margin-left: -74px;
    }
  }
`;
