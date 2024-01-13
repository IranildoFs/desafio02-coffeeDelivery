import styled from "styled-components";
import { ArticleBaseStyle } from "../styles";

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`;

export const Title = styled.h1`
  font-size: 1.125rem;
  line-height: 130%;
  font-weight: 800;
  font-family: "Baloo 2";
  color: #403937;
`;

export const FormArticleContainer = styled(ArticleBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
