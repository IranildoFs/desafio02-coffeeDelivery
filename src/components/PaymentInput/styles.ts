import styled, { css } from "styled-components";

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) =>
      css`
        background: ${theme["purple-100"]};
        border-color: ${theme["purple-300"]};
      `}
  }
`;

export const ContentContainer = styled.div`
  padding: 0 1rem;
  font-size: 0.75rem;
  background: ${({ theme }) => theme["gray-300"]};
  color: ${({ theme }) => theme["gray-700"]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme["gray-300"]};
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme["purple-300"]};
  }

  &:hover {
    background: ${({ theme }) => theme["purple-100"]};
  }

  user-select: none;
`;
