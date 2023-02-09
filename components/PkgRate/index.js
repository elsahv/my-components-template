import Image from "next/image";
import content from "./data";
import {
  Wrapper,
  Title,
  Description,
  Container,
  Grid,
  Content,
  ImgWrapper,
} from "./PkgRate.styled";

export default function PkgRate({
  title,
  price,
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
}) {
  return (
    <Wrapper>
      <Container>
        <Title>What type of Project can I help you with?</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit
          consequatur saepe laudantium commodi reic.
        </Description>
      </Container>
      <Container>
        <Grid>
          {content.map((item, index) => (
            <div key={index} item={item}>
              <ImgWrapper>
                <Image
                  src={item.image}
                  alt="about-me"
                  // layout="responsive"

                  className="img"
                />
              </ImgWrapper>
              <Content>
                <h3>{item.title}</h3>
                <ul>
                  <li>{item.price}</li>
                  <li>{item.listItem1}</li>
                  <li>{item.listItem2}</li>
                  <li>{item.listItem3}</li>
                  <li>{item.listItem4}</li>
                  <li>{item.listItem5}</li>
                </ul>
              </Content>
            </div>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
