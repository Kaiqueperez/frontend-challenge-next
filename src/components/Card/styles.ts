import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const Card = styled.div`
  img {
    height: 15rem;
  }

  .card-content {
    padding-top: 1rem;
    background-color: rgba(255, 255, 255, 0.4);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .line {
      background-color: rgba(220, 226, 229, 1);
      height: 1px;
    }

    p,
    span {
      padding-left: 1rem;
    }
  }
`;
