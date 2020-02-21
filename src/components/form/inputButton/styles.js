import styled from "styled-components";
import inputButtonHeight from "./mixins";



export const Button = styled.button`
  background-color: #33a0ff;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: 0.35px;
  text-align: center;
  color: #ffffff;
  width: 20%;
  border: none;
  border-radius: 0 4px 4px 0;
`;

export const Input = styled.input`
  padding-left: 20px;
  color: #262626;
  width: 80%;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: 0.4px;
  text-align: left;
 
`;

export const Container = styled.div`
  width: 100%;
  ${inputButtonHeight};
  border-radius: 4px;
  border: 2px solid #f1f3f4;
  display: flex;
`;
