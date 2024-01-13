import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  //position: fixed;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 6.5rem;
  width: 100%;
  background: ${({ theme }) => theme["gray-100"]};

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }
`;

type Variant = "yellow" | "purple";

interface NavButtonContainerProps {
  variant: Variant;
}

export const NavButton = styled.button<NavButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  font-size: 0.9rem;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme["gray-100"]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

  ${({ variant, theme }) => css`
    background: ${theme[`${variant}-100`]};
    color: ${theme[`${variant}-500`]};

    span {
      background: ${theme[`${variant}-500`]};
    }
  `}

  ${({ variant, theme }) =>
    variant === "purple" &&
    css`
      svg {
        color: ${theme[`${variant}-300`]};
      }
    `}
`;
