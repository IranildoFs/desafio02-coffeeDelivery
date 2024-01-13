import styled from "styled-components";
import { ArticleBaseStyle } from "../styles";

export const CheckoutCoffesCartContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme["gray-400"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    h1 {
      //styleName: Text/Regular M;
      font-family: Roboto;
      font-size: 1rem;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: left;
    }
    img {
      width: 4rem;
      height: 4rem;
    }
  }
  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`;
export const IncremetInputContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`;

export const RemoveCoffeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme["gray-700"]};
  font-size: 0.75rem;
  height: 100%;
  border: none;
  background: ${({ theme }) => theme["gray-300"]};
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme["purple-300"]};
  }

  &:hover {
    background: ${({ theme }) => theme["gray-400"]};
  }
`;
