import Link from "next/link";
import content from "./data";
import { ThreeCol, Banner, DevDesignsWrapper, Title } from "./CTA.styled";

export default function DevDesignProcess() {
  return (
    <>
      <Banner>Development/ Design Process</Banner>
      <DevDesignsWrapper>
        <ThreeCol>
          {content.map((item, index) => (
            <div key={index} item={item}>
              <Title>{item.title}</Title>
              {/* 
              //TODO: ADD ICON TO EACH SQ 
              */}
              <p>{item.p1}</p>
            </div>
          ))}
        </ThreeCol>
      </DevDesignsWrapper>
    </>
  );
}
