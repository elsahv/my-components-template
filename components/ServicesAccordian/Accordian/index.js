import React, { useState } from "react";
import { Data } from "./data.js";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  Wrapper,
  AccordionSection,
  Container,
  Wrap,
  ServiceTitle,
  Dropdown,
} from "./accordian.styled";

const Accordian = () => {
  const [clicked, setclicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setclicked(null);
    }
    setclicked(index);
  };
  return (
    <>
      <h3 style={{ width: "100%" }}>
        Services Include- click on links for more info{" "}
      </h3>

      <Wrapper>
        <IconContext.Provider value={{ color: "#00ffb9", size: "25px" }}>
          <AccordionSection>
            <Container>
              {Data.map((item, index) => {
                return (
                  <>
                    <Wrap onClick={() => toggle(index)} key={index}>
                      <ServiceTitle>{item.service}</ServiceTitle>
                      <span>
                        {clicked === index ? <FiMinus /> : <FiPlus />}
                      </span>
                    </Wrap>
                    {clicked === index ? (
                      <Dropdown>
                        <p>{item.description}</p>
                      </Dropdown>
                    ) : null}
                  </>
                );
              })}
            </Container>
          </AccordionSection>
        </IconContext.Provider>
      </Wrapper>
    </>
  );
};

export default Accordian;
