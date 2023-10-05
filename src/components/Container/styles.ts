import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 3rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 16px;
  }

  @media (min-width: 768px) {
    width: 768px;
    margin: 0 16px;
  }

  @media (min-width: 992px) {
    width: 928px;
    margin: 0 32px;
  }

  @media (min-width: 1200px) {
    width: 1120px;
    margin: 0 40px;
  }

  @media (min-width: 1400px) {
    width: 1304px;
    margin: 0 auto;
  }
`;
