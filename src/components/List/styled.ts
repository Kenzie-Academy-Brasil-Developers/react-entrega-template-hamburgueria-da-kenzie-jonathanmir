import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  overflow: auto;
  gap: 10px;
  border-radius: var(--radius-1);
  margin-left: 15px;
  padding-right: 15px;
  margin-top: 80px;

  @media (min-width: 800px) {
    align-self: center;
    margin: 0 115px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }
`;
