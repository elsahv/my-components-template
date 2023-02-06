import styled from "styled-components";

export const Wrapper = styled.div`
  background: green;
  width: 100%;
  padding-bottom: 200px;
`;

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  // background: pink;
`;

export const Container = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

export const Wrap = styled.div`
  background: teal;
  color: #fff;
  border: solid 2px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
  // width: 500px;

  h1 {
    padding: 25px;
    font-size: 20px;
  }

  span {
    margin-right: 1.5rem;
  }
`;

export const ServiceTitle = styled.span`
  padding: 10px 20px;
  text-align: left;
  font-size: 20px;
  @media only screen and (max-width: 531px) {
    font-size: 17px;
  }
`;

export const Dropdown = styled.div`
  background: aquamarine;
  color: #000;
  // text-shadow: 1px 1px 1px #000;
  // width: 500px;

  // height: 100px;
  display: flex;
  padding: 25px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;

  p {
    font-size: 18px;
  }
`;
