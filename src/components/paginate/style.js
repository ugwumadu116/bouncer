
import Styled from 'styled-components'
import backgroundColor from '../color/mixins'

export const Active = { background: "black", color: 'white' };
export const inactive = {  color:'black' };

export const Wrapper = Styled.div`
 ${backgroundColor}
 display: flex;
 justify-content: center
 span{
    padding: 0 12px;
    cursor:pointer;
 }
`
