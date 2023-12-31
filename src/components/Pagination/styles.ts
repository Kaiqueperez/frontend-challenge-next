import styled from "styled-components";

export const WrapperPaginationButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin: 0 70px;
  padding-top: 24px;

  button {
    background-color: #e9e9f0;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    :hover {
      background-color: white;
      color: #ffa585;
      border: 1px solid #ffa585;
    }
  }
`;

export const WrapperNumberedButtons = styled.div`
  display: flex;
  gap: 2px;
`;

export const WrapperArrowButtons = styled.div`
  display: flex;
  gap: 4px;
`;
