import styled from 'styled-components'
import { color } from '../color/mixins'
import { fontSize, fontWeight } from '../text/mixins'
import { Links } from '../text'
import theme from '../theme'
export const HR = styled.hr`
${color}
`
export const Text = styled.p`
${fontSize}
${color}
${fontWeight}
`
export const Icons = styled.div`
margin-top: 30px;
`

export const Wrapper1 = styled.div`
    width:100%;
`
export const P = styled(Text)`
    width:80%;
    text-decoration:none;
`
export const Social = styled.div`
    
`

export const IconContainer=styled.span`
display:inline-block;
${color};
margin-right:1.5rem;
`

export const Img = styled.img`
    padding-left:1rem;
`
export const Logo = styled.img`
    max-width:190.8px;
    height:auto;
    width:100%;
    margin:14px 0 14px 0;
`

export const FootLink = styled(Links)`
    text-decoration:none;
    &:hover{
        color:${theme.colors.defaultColor}
    }

`