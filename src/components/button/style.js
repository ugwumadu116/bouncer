import Styled from "styled-components";
import backgroundColor, { color } from "../color/mixins";
import { size, btnColor, btnState } from "./mixin";

const Button = Styled.button`
border: none;
color: white;
border-radius: 4px;
font-size: 1rem;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.75;
cursor:pointer;
letter-spacing: 0.4px;
text-align: center;
padding: 0 20px ;
display:flex;
justify-cntent:space-betweem;
align-items:center;

${backgroundColor}
${color}
${size}
${btnColor}
${btnState}
`;
export default Button;
