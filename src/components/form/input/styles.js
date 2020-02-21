import styled from "styled-components";
import inputHeight from "./mixins";

export const Input = styled.input`
  ${inputHeight}
  width: 100%;
  border: 2px solid #f1f3f4;
  border-radius: 4px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.35px;
  box-sizing: border-box;
  text-align: left;
  color: #262626;
  padding-left: 20px;
  outline: none;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.35px;
  text-align: left;
  color: #22262a;
`;

export const Container = styled.div`
  margin: 20px 0;
  .eye{
    cursor: pointer;
  }
`;
