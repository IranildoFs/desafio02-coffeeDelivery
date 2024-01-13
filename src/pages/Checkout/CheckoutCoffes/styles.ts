import styled from "styled-components";
import { ArticleBaseStyle } from "../../Checkout/styles";

export const CheckoutCofeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`;

export const DetailsContainer = styled(ArticleBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;
