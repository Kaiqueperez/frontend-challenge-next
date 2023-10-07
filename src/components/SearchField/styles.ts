import styled from "styled-components";

export const WrapperSearchInput = styled.div`
  width: 22rem;
  display: flex;
  position: relative;

  img {
    position: absolute;
    right: 1rem;
    bottom: 0.5rem;
  }
`;
export const InputField = styled.input`
  display: inline-flex;
  background-color: rgba(243, 245, 246, 1);
  padding: 0.5625rem 1rem;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  ::placeholder {
    font-size: 0.875rem;
  }
`;
