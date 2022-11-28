import styled from "styled-components";

export const StyledCartContainer = styled.div`
  border-radius: var(--radius-1);
  background-color: var(--color-gray-0);
  height: fit-content;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px 15px;

  .cart-title {
    width: 100%;
    height: fit-content;
    padding: 10px;
    padding-left: 20px;
    background-color: var(--color-primary);
    color: var(--color-gray-0);
    border-top-right-radius: var(--radius-1);
    border-top-left-radius: var(--radius-1);
  }

  .cart-list {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-top: 15px;
    width: 100%;
    height: 150px;
    gap: 15px;
  }

  .cart-card {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    height: 100px;
    margin-bottom: 10px;
  }

  .cart-details-div {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .product-details-cart {
    padding: 15px;
    height: 100px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }
  .img-cart-div {
    background-color: var(--color-gray-0);
    display: flex;
    align-items: center;
    object-fit: cover;
    justify-self: flex-start;
    width: 60px;
    margin-right: 10px;
  }

  .img-cart-div > img {
    width: 60px;
  }
  .remove-btn {
    padding: 15px;
  }
  .remove-btn > img {
    width: 22px;
  }
  .remove-all-btn {
    margin: 0 auto;
    margin-top: 15px;
    display: flex;
  }

  .product-title {
    width: 60%;
  }
  @media (min-width: 800px) {
    margin-top: 0;
    margin-right: 115px;
    .cart-details-div {
      width: 365px;
      align-self: flex-start;
    }
    .cart-list {
      height: fit-content;
      max-height: 465px;
      align-items: center;
      overflow-x: hidden;
      gap: 0;
    }
    .cart-container {
      width: 365px;
    }
    .cart-card {
      justify-content: flex-start;
      width: 100%;
      justify-content: space-around;
      align-items: center;
      padding-left: 10px;
    }

    .img-cart-div {
      background-color: var(--color-gray-20);
      min-width: 70px;
      height: 70px;
      border-radius: var(--radius-1);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
