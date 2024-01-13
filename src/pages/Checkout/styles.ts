import styled from "styled-components";

export const CheckoutContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const ArticleBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme["gray-200"]};
  border-radius: 6px;
  padding: 2.5rem;
`;
