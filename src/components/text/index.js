import styled,{css} from "styled-components";
import {Link,NavLink} from "react-router-dom"
import {fontSize,fontWeight,lineHeight,letterSpacing} from "./mixins"
import {color} from "../color/mixins"
const allStyles=css`
    ${fontSize}
    ${fontWeight}
    ${lineHeight}
    ${letterSpacing}
    ${color}
    font-family: 'Open Sans', sans-serif;
`

const Text = styled.p`
${allStyles}
`;
  
export const Links=styled(Link)`
${allStyles}
`

export const NavLinks=styled(NavLink)`
${allStyles}
`
export default Text;
