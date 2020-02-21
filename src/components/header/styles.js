import Styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";
import backgroundColor, { color } from "../color/mixins";
import { fontSize } from "../text/mixins";
import { Link } from "react-router-dom";
import {FaSearch} from 'react-icons/fa'
export const Head = Styled.div`
${backgroundColor}
${fontSize}
width:100%;
padding:0.3rem;

`;

export const Links = Styled(Link)`
${color}
text-decoration:none;
`;
export const Pricing = Styled.span`
${color}

`;

export const Go = Styled(IoIosArrowRoundForward)`
${color}
font-size:2em;
`
export const Search = Styled(FaSearch)`
 ${({search})=>search && `
  ${backgroundColor}
 `}
`