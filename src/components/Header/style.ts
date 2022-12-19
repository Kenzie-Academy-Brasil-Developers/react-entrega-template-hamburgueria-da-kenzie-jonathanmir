import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 120px;
  background-color: var(--color-gray-0);
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 17px;
  }
  #logo-img {
    width: 150px;
    align-self: center;
    margin-top: 12px;
  }

  form {
    height: 40px;
    display: flex;
  }

  input {
    display: flex;
    position: relative;
    height: 50px;
    border-radius: var(--radius-1);
    border: 1px solid var(--color-gray-20);
    width: 100%;
    padding: 10px;
  }

  #search-btn {
    position: absolute;
    right: 25px;
    top: 60px;
    width: 100px;
  }

  .cart-icon-amount {
    font-size: 12px;
    position: absolute;
    top: 18px;
    right: 140px;
    background-color: var(--color-primary);
    border-radius: var(--radius-1);
    padding: 3px;
  }
  .icons-div {
    display: flex;
    align-items: center;
  }
  @media (min-width: 800px) {
    width: 100%;
    height: 80px;
    div {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 80px;
    }
    input {
      width: 340px;
      height: 50px;
    }

    #search-btn {
      top: 25px;
      right: 190px;
      height: 40px;
    }
  }
`;
