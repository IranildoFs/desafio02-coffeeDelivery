import styled from "styled-components";

const FONT_FAMILY = "Roboto";
export const CheckoutValuesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Style for h1 element */
  h1 {
    font-family: ${FONT_FAMILY};
    font-size: 1rem;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }

  /* Style for h2 element */
  h2 {
    font-family: ${FONT_FAMILY};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
