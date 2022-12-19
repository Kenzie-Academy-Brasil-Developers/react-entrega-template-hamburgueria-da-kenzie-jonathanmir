import styled from "styled-components";

export const StyledForm = styled.div`
  margin: 0 15px;
  margin-top: 30px;
  border: 2px solid var(--color-gray-20);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  border-radius: var(--radius-1);

  .form-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  h3 {
    font-weight: 700;
  }
  a {
    width: 20%;
    text-decoration: underline;
    cursor: pointer;
  }

  button {
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
    width: 380px;
    padding-bottom: 35px;

    button {
      margin-top: 15px;
    }
    a {
      width: 50%;
    }
  }
`;
