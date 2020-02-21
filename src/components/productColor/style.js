import Styled from "styled-components";
import color from "../color/mixins"

export const CircleColor = Styled.div`
  width: 20px;
  height: 20px;
  border-radius: 999px;
  cursor: pointer;
  ${color}
`;

const Wrapper = Styled.div`
    ${color};
    padding: 1.125rem 1.25rem;
    .color-container{
        display:flex;
        justify-content: space-between;
        
    }
`;

export default Wrapper;


