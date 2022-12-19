import styled from "styled-components";

export const StyledFieldError = styled.p`
  font-weight: 500;
  color: red;
`;

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  fieldset {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: none;
    padding: 5px 0 5px 0;
  }
  input {
    height: 40px;
    position: relative;
    padding-left: 5px;
    border-radius: var(--radius-1);
    border: 2px solid var(--color-gray-20);
  }
`;
