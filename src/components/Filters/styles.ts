import styled from "styled-components";

export const FilterWrapper = styled.section`
  display: flex;
  gap: 2.5rem;
  height: 22px;
  margin: 0 70px;
  justify-content: space-between;

  select {
    background-color: transparent;
    border: none;
    font-size: 1rem;

    option {
      font-size: 1rem;
    }
  }
`;

export const WrapperFilterContent = styled.div`
  display: flex;
  gap: 2rem;
`;
