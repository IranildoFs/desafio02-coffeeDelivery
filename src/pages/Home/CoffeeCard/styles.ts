import styled from "styled-components";

export const CoffeeCardContent = styled.div`
  width: 100%;
  background: ${({ theme }) => theme["gray-200"]};
  border-radius: 6px 36px;
  padding: 1.25rem;
  padding-top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //margin-bottom: 2rem;

  img {
    width: 6.25rem;
    height: 6.25rem;
    margin-top: -1.25rem;
  }
`;

export const ShowArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 0.75rem;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.25rem;
  }

  span {
    padding: 0.25rem 0.5rem;

    font-size: 0.62rem;
    line-height: 13px;
    font-weight: 700;
    border-radius: 15px;
    text-transform: uppercase;

    background: ${({ theme }) => theme["yellow-100"]};
    color: ${({ theme }) => theme["yellow-500"]};
  }
  h1 {
    margin-top: 1rem;
    text-align: center;
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 800;
    font-family: "Baloo 2";
  }
  strong {
    margin-top: 0.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
    text-align: center;
    color: ${({ theme }) => theme["gray-600"]};
  }
`;

export const ShoopArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 2.06rem;
  gap: 10px;

  input {
    width: 4.5rem;
    height: 2.4rem;
    border: 0;

    background: transparent;
    border-radius: 6px;
    padding: 0 0.5rem;
    text-align: center;
  }

  input[type="number"]::-webkit-inner-spin-button {
    cursor: pointer;
  }
`;

export const Price = styled.div`
  color: ${({ theme }) => theme["gray-700"]};
  display: flex;
  align-items: center;
  gap: 0.1rem;

  span {
    font-size: 0.6rem;
  }

  strong {
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: 800;
    font-family: "Baloo 2";
  }
`;

export const AddCartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  > button {
    background: ${({ theme }) => theme["purple-500"]};
    color: ${({ theme }) => theme["white"]};
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 8px;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      background: ${({ theme }) => theme["purple-300"]};
    }
  }
`;
