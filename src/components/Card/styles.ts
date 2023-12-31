import styled from "styled-components";
import { Section } from "../SectionWrapper/styles";

export const CardWrapper = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const Card = styled.div`
  img {
    height: 15rem;
    border-radius: 15px 15px 0px 0px;
  }

  :hover {
    cursor: pointer;
  }
`;

export const CardContent = styled.div`
  padding-top: 1rem;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .line {
    background-color: rgba(220, 226, 229, 1);
    height: 1px;
  }

  p,
  span {
    padding-left: 1rem;
    color: #41414d;
    font-family: "Saira";
  }

  #price {
    font-weight: 600;
    line-height: 150%;
  }
`;
