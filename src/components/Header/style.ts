import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--color-gray-0);
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 17px;
  }
  #logo-img {
    width: 20vw;
    max-width: 150px;
    align-self: center;
    margin-top: 30px;
  }

  form {
    height: 40px;
    display: flex;
  }

  input {
    display: flex;
    width: 45vw;
    top: 15px;
    position: relative;
    height: 50px;
    border-radius: var(--radius-1);
    border: 1px solid var(--color-gray-20);
    padding: 10px;
  }

  #search-btn {
    display: none;
    position: absolute;
    right: 25px;
    top: 60px;
    width: 100px;
  }

  .cart-icon-amount {
    cursor: pointer;
    font-size: 12px;
    position: absolute;
    top: 20px;
    right: 35px;
    background-color: var(--color-primary);
    border-radius: var(--radius-1);
    padding: 3px;
  }
  .icons-div {
    margin-top: 35px;
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
      top: 0px;
    }
    .cart-icon-amount {
      right: 135px;
    }
    .icons-div {
      margin-top: 0px;
    }

    #logo-img {
      margin-top: 0;
    }
    #search-btn {
      display: block;
      top: 25px;
      right: 190px;
      height: 40px;
    }
  }
`;
