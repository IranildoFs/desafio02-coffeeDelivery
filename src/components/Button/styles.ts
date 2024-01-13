import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${({ theme }) => theme["gray-100"]};
  font-weight: 700;
  background: ${({ theme }) => theme["yellow-300"]};
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 0.5s;
  line-height: 1.3rem;
  margin-top: 0.7rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme["yellow-500"]};
  }
`;
