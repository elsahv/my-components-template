import styled from "styled-components";

export const ContactBtn = styled.button`
  background: teal;
  border: solid 1px #000;
  font-size: 17px;
  padding: 7px 12px;
  cursor: pointer;
  border-radius: 10px;
  // width: 280px;
  text-align: left;
  a {
    // text-shadow: 1px 1px 1px #000;
    text-decoration: none;
    color: #fff;
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
  @media only screen and (max-width: 834px) {
    font-size: 15px;
  }
`;

export const Grid = styled.div`
  // background: orange;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "leftSide rightSide";

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "leftSide"
      "rightSide";
  }
`;

export const LeftSide = styled.div`
  grid-area: leftSide;
  // background: teal;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;

  @media only screen and (max-width: 1024px) {
    // padding: 30px;
    justify-content: flex-start;
  }
  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
`;
export const RightSide = styled.div`
  grid-area: rightSide;
  // background: coral;
  display: flex;
  justify-content: center;
`;

export const PgOptionsContentBody = styled.div``;
export const PgOptionsListContainer = styled.div`
  display: "flex";
  flex-direction: column;
  background: coral;
  padding-left: 30px;
  padding-bottom: 20px;
  margin-bottom: 50px;
  border: solid 1px #000;
`;

export const StandardOptimalSq = styled.div``;

export const StandardOptimalTitle = styled.h2`
  margin-top: 40px;
`;
