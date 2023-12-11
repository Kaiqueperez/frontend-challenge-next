import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  @media (max-width: 576px) {
    width: 100vw;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 992px) {
    width: 928px;
  }

  @media (min-width: 1200px) {
    width: 1120px;
  }

  @media (min-width: 1400px) {
    width: 1304px;
  }
`;
