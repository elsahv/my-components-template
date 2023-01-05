import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: #000;
`;

export const Form = styled.form`
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .input-fields {
    background: aquamarine;
    border: solid 2px #000;
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
  margin: 30px 0;
`;
