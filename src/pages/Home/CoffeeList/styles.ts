import styled from "styled-components";

export const CoffeeListContainer = styled.article`
  width: 100%;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 130%;
  font-weight: 800;
  font-family: "Baloo 2";
`;

export const CoffeeListContent = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`;
