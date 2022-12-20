import styled from "styled-components";

export const StyledRegister = styled.div`
  .slogan-section {
    display: none;
  }
  .slogan-div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 2px solid var(--color-gray-20);
    height: 95px;
    border-radius: var(--radius-1);
  }

  .slogan-div > div {
    background-color: var(--color-primary-50);
    padding: 15px;
    text-align: left;
    border-radius: var(--radius-1);
  }

  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0 115px;

    .slogan-section {
      display: block;
      height: 280px;
      margin: auto auto;
      width: 50vw;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    section {
      width: 50vw;
    }
    .slogan-section > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 19px;
      width: 300px;
      margin-top: 15px;
      padding: 10px;
    }
    img {
      width: 200px;
    }
  }
`;
