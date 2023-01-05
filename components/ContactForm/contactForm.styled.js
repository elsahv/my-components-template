import styled from "styled-components";

export const Wrapper = styled.div`
  color: #000;
  background: teal;
  display flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
`;

export const AboutContent = styled.div`
  // background: pink;
  // padding: 20px;
`;
export const FormWrapper = styled.div`
  // background: orange;
`;

export const Form = styled.form`
  // padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .input-fields {
    // background: #3aa1aa;
    background: aquamarine;
    border: solid 1px #000;
    padding-left: 10px;
    padding-top: 5px;
    color: gray;
    font-size: 18px;
  }
  .btn {
    background: teal;
    width: 110px;
    padding: 0px 5px;
    margin-top: 25px;
    color: #fff;
    border: solid 2px #000;
    text-shadow: 1px 1px 1px #000;
    font-size: 17px;
    cursor: pointer;
    &:hover {
      background: coral;
      color: #000;
      text-shadow: 1px 1px 1px #fff;
      transition: 1s;
    }
  }
`;
export const Label = styled.label`
  padding: 25px 0 5px 1px;
  font-size: 20px;
`;
export const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  width: 400px;
`;
export const Textarea = styled.textarea`
  height: 150px;
  border-radius: 5px;
  width: 400px;
`;
