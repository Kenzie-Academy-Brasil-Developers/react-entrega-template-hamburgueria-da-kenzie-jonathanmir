import styled from "styled-components";

export const StyledForm = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 70vh;
  border: 2px solid var(--color-gray-20);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  border-radius: var(--radius-1);

  button {
    width: 100%;
    background-color: var(--color-primary);
    color: var(--color-gray-0);
    font-weight: 700;
    border-radius: var(--radius-1);
    height: 35px;
    margin-top: 10px;
  }

  a {
    margin: 0 auto;
    width: 100%;
    border-radius: var(--radius-1);
    height: 35px;
    background-color: var(--color-gray-20);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .info-reg {
    align-self: center;
    margin: 0 auto;
  }

  @media (min-width: 900px) {
    margin: 0 auto;
    width: 380px;
    padding-bottom: 35px;
    height: 450px;
    button {
      margin-top: 15px;
    }
    a {
    }
  }
`;
