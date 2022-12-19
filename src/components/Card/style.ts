import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--color-gray-20);
  border-radius: var(--radius-1);
  height: 50vh;

  .product-info-div {
    padding: 9px 21px 16px 21px;
    height: 70%;
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
  }
  .product-info-div > p {
    width: 100%;
  }
  .card-img-div {
    height: 35%;
    width: 100%;
    background-color: var(--color-gray-0);
    overflow: hidden;
    display: flex;
    justify-content: center;
    object-fit: cover;
  }

  @media (min-width: 800px) {
    width: 20vw;
    .add-btn {
      width: fit-content;
    }
  }
`;
