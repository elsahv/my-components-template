import styled from "styled-components";

export const ThreeCol = styled.div`
  // background: pink;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "left middle right";
  grid-gap: 1em;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "left middle"
      "right .";
    grid-gap: 2em;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "middle"
      "right";
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  background: teal;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  width: 100%;
  // height: 50px;
  padding: 20px 0;
  font-size: 20px;
`;

export const DevDesignsWrapper = styled.div`
  // background: green;
  padding: 20px 100px;
  margin: 30px 0;
  @media only screen and (max-width: 1024px) {
    padding: auto;
    p {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 0 20px;
    text-align: center;
  }
`;

export const Title = styled.h4`
  font-size: 30px;
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
    padding-top: 20px;
  }
`;
