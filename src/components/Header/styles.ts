import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
  background-color: black;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);

  h1 {
    font-family: Saira Stencil One;
    font-size: 2.5rem;
    color: rgba(93, 93, 109, 1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WrapperBagAndSearh = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 450px) {
    width: 100%;

    input {
      width: 100%;
    }
  }
`;
