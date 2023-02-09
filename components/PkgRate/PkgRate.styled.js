import styled from "styled-components";

export const Wrapper = styled.div`
  // height: 100vh;

  background: lightgray;
`;

export const Container = styled.div`
  padding: 50px 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-decoration: underline;
  font-size: 40px;
  padding-top: 50px;
`;

export const Description = styled.p`
  font-size: 20px;
  margin: 10px 0;
`;

export const Grid = styled.div`
  // background: teal;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ImgWrapper = styled.div`
  // background: teal;
  padding: 10px 0;
  .img {
    border-radius: 5%;
    width: 400px;
    height: 400px;
  }
`;

export const Content = styled.div`
  padding-left: 10px;

  h3 {
    font-size: 20px;
  }
  ul {
    padding-left: 20px;
  }
`;
