import styled from "styled-components";
const FONT_FAMILY = "Roboto";

export const PaymentMethodsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    font-family: ${FONT_FAMILY};
    font-size: 0.75rem;
    color: ${({ theme }) => theme["red-500"]};
  }
`;
