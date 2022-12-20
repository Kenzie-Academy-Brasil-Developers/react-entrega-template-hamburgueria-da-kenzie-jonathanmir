import styled from "styled-components";

export const StyledLogin = styled.div`
  margin: 0 15px;

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
  img {
    width: 245px;
    padding: 25px 0 25px 0;
  }
  p {
    font-size: 15px;
    width: 75%;
  }

  span {
    font-weight: 600;
  }
  @media (min-width: 900px) {
    margin: 0 115px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .slogan-section {
      display: block;
      height: 280px;
      width: 50vh;
      margin: auto auto;
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
  }
`;
