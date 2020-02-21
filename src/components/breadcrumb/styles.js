
import Styled from 'styled-components'
import BackgroundColor, { color } from "../color/mixins";
export const Crumb = Styled.div`
    ${BackgroundColor}
    ${color}
    width:100%;
    height:2.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
`