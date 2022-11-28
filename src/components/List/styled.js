import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  overflow: auto;
  gap: 10px;
  border-radius: var(--radius-1);
  margin-left: 15px;
  padding-right: 15px;

  @media (min-width: 800px) {
    margin-left: 115px;
    width: 75vw;
    flex-wrap: wrap;
    gap: 20px;
    overflow: revert;
  }
`;
