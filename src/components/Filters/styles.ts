import styled from "styled-components";

export const FilterWrapper = styled.section`
  display: flex;
  gap: 2.5rem;

  .filterContent {
    :hover {
      border-bottom: 2px solid orange;
      cursor: pointer;
    }
  }
  .wrapper-filter-content {
    display: flex;
    gap: 2rem;
  }

  select {
    background-color: transparent;
    border: none;
    font-size: 1rem;

    option {
      font-size: 1rem;
    }
  }
`;
