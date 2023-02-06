import Image from "next/image";
import img1 from "../../public/images/sketch2.jpg";
import Accordian from "./Accordian";

import styled from "styled-components";

export const ImgWrapper = styled.div`
  padding: 20px 0 50px 0;
  // background: teal;
  width: 800px;
  height: 800px;

  @media only screen and (max-width: 1024px) {
    width: 400px;
    height: 400px;
    padding: auto;
  }
  @media only screen and (max-width: 531px) {
    width: 300px;
    height: 300px;
    padding: auto;
  }
`;

export const Section = styled.section`
  padding-top: 10px;
  // border-top: 1px solid #000;
`;

export const ServicesGrid = styled.div`
  // background: orange;
  margin: 150px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "leftSide rightSide";

  @media only screen and (max-width: 1024px) {
    height: 1300px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "leftSide"
      "rightSide";
  }
`;

export const AccordianWrapper = styled.div`
  grid-area: leftSide;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 200px;
  @media only screen and (max-width: 531px) {
    padding-bottom: 0px;
  }
`;

export const AccordianContainer = styled.div`
  padding: 100px 150px;
  @media only screen and (max-width: 600px) {
    padding: 20px 70px;
  }
  @media only screen and (max-width: 531px) {
    padding: 10px;
  }
`;

export const ServiceImgWrapper = styled.div`
  grid-area: rightSide;
  // background: coral;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    padding-top: 150px;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 220px;
  }
`;

export default function WebDevHero({ title, headline, p1, p2 }) {
  return (
    <Section id="services">
      <ServicesGrid>
        <AccordianWrapper>
          <AccordianContainer>
            <Accordian />
          </AccordianContainer>
        </AccordianWrapper>
        <ServiceImgWrapper>
          <ImgWrapper>
            <Image
              src={img1}
              alt="about-me"
              layout="responsive"
              className="img"
            />
          </ImgWrapper>
        </ServiceImgWrapper>
      </ServicesGrid>
    </Section>
  );
}
