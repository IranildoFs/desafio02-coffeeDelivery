import styled from "styled-components";

export const OrderSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme["yellow-500"]};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
  }
`;

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme["gray-100"]};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &&::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    color: ${({ theme }) => theme["gray-700"]};
  }
`;
