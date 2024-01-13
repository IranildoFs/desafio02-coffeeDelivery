import styled from "styled-components";
import background from "./../../../assets/background.png";

export const BannerContainer = styled.main`
  width: 100%;
  height: 34rem;
  background: url(${background}) no-repeat center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BannerContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  > img {
    width: 29.7rem;
    height: 22.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 130%;
  font-weight: 800;
  font-family: "Baloo 2";
`;

export const SubTitle = styled.h1`
  margin-top: 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
`;

export const BannerContenst = styled.article`
  section {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 1rem;
    width: 36rem;
    margin-top: 4.1rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.7rem;
    }
    strong {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
    }
  }
`;

export const Items = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;


