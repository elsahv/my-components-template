import styled from "styled-components";

export const Wrapper = styled.div`
  // height: 100vh;
  background: lightgray;
`;

export const Container = styled.div`
  padding: 30px 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    padding: 30px 110px;
  }
  @media only screen and (max-width: 600px) {
    padding: 20px 40px;
  }
  @media only screen and (max-width: 531px) {
    padding: 10px;
  }
`;

export const Title = styled.h2`
  // text-decoration: underline;
  font-size: 40px;
  padding-top: 30px;
  @media only screen and (max-width: 531px) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  margin: 10px 0;
`;

export const Grid = styled.div`
  // background: teal;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;

  @media only screen and (max-width: 834px) {
    grid-template-columns: 1fr;
    grid-gap: 2em;
  }
`;

export const ImgWrapper = styled.div`
  // background: teal;
  padding: 10px 0;
  width: 400px;
  height: 400px;
  .img {
    border-radius: 5%;
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 834px) {
    padding-top: 60px;
  }

  @media only screen and (max-width: 400px) {
    width: 280px;
    height: 280px;
  }
`;

export const Content = styled.div`
  padding-left: 10px;
  padding-bottom: 50px;

  ul {
    padding-left: 20px;
    font-size: 20px;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 3px;
  @media only screen and (max-width: 531px) {
    font-size: 17px;y
  }
`;
