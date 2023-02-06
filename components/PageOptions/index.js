import content from "./data";
import {
  ContactBtn,
  PgOptionsContentBody,
  PgOptionsListContainer,
  StandardOptimalSq,
  StandardOptimalTitle,
  Grid,
  LeftSide,
  RightSide,
} from "./PageOptions.styled";

export default function standardOptimalPgs(
  title,
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
  listItem6,
  listItem7,
  listItem8
) {
  return (
    <>
      <Grid style={{ marginTop: "50px" }}>
        <LeftSide>
          <PgOptionsContentBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque
            eveniet earum quod tempore quasi, veniam corrupti omnis natus, optio
            ad, accusantium enim accusamus! Autem cumque veniam reiciendis est
            sequi.
            <ContactBtn>contact cta</ContactBtn>
          </PgOptionsContentBody>
        </LeftSide>
        <RightSide>
          <PgOptionsListContainer>
            {content.map((item, index) => (
              <div key={index} item={item}>
                <StandardOptimalSq>
                  <StandardOptimalTitle>{item.title}</StandardOptimalTitle>
                  <ul>
                    <li>{item.listItem1}</li>
                    <li>{item.listItem2}</li>
                    <li>{item.listItem3}</li>
                    <li>{item.listItem4}</li>
                    <li>{item.listItem5}</li>
                    <li>{item.listItem6}</li>
                    <li>{item.listItem7}</li>
                    <li>{item.listItem8}</li>
                  </ul>
                </StandardOptimalSq>
              </div>
            ))}
          </PgOptionsListContainer>
        </RightSide>
      </Grid>
    </>
  );
}
