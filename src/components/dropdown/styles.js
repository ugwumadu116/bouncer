import Styled from "styled-components";
import backgroundColor from '../color/mixins';
import Text from '../text'
import theme from '../theme'
export const DropWrapper = Styled.div`

width: 50rem;
    height: 100%;
    box-shadow: 0px 30px 30px 0 rgba(0, 0, 0, 0.1);
    ${backgroundColor}
    margin: 20px;
`

export const Wrapper = Styled.div`
    ${backgroundColor}
    width:100%;
`
export const CatWrapper = Styled.div`
    height: 100%;
`
export const Links = Styled(Text)`
    padding:0.2rem;
    text-decoration:none;
    &:hover{
        color:${theme.colors.secondary}
    }

`
export const ItemWrapper = Styled.div`
height:100%;
padding-bottom:1rem;
`