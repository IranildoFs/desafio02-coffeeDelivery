import styled, { css } from "styled-components";

interface IconProps {
  backgroundColor: string;
}

export const IconWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    color: ${({ theme }) => theme["gray-700"]};
  }
`;

export const IconContainer = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${({ backgroundColor }) => backgroundColor};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
