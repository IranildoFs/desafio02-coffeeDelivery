import styled, { css } from "styled-components";

export const InputMaxMinContainer = styled.div`
  background: ${({ theme }) => theme["gray-300"]};

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px;

  padding: 0 0.5rem;

  input {
    text-align: center;
    width: 100%;

    border: 0;
    color: ${({ theme }) => theme["gray-700"]};
    background-color: ${({ theme }) => theme["gray-300"]};

    &:focus {
      outline: none;
    }
  }
`;

export const IconWrapper = styled.button.attrs({ type: "button" })`
  width: 0.8rem;
  height: 0.8rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme["purple-300"]};

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme["purple-500"]};
  }
`;
