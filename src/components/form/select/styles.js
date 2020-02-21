import styled from "styled-components";
import select from "./mixins";
import backgroundColor from "../../color/mixins";

const Select = styled.select`
  ${select}
  ${backgroundColor}
  border: 2px solid #fafafb;
  outline: none;
  border-radius: 4px;
  width: 100%;
`;
export default Select;
