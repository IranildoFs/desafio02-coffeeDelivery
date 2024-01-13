import styled, { css } from "styled-components";
const FONT_FAMILY = "Roboto";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    font-family: ${FONT_FAMILY};
    font-size: 0.75rem;
    color: ${({ theme }) => theme["red-500"]};
  }
`;

interface InputStyleContainerProps {
  hasError: boolean;
}
export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme["gray-400"]};
  background: ${({ theme }) => theme["gray-300"]};
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme["yellow-500"]};
  }

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme["red-500"]};
    `}
`;
export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  color: ${({ theme }) => theme["gray-600"]};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    color: ${({ theme }) => theme["gray-600"]};
  }
`;

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme["gray-500"]};
`;
