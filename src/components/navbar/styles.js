import Styled, { keyframes } from "styled-components";
import { Link} from 'react-router-dom'
import theme from '../theme'

const ascend = keyframes`
  from {
    transform: translateY(20px);
    opacity:0;
  }

  to {
    transform: translateY(0);
    opacity:1;
  }
`;

export const NavbarWrapper = Styled.div`
  animation: ${ascend} 2s linear 0s 1;
`;

export const Links = Styled(Link)`
    text-decoration:none;
    background:none;
    border:none
    padding:1rem;
    &:hover{
        color:${theme.colors.secondaryDark}
    }
    &:focus{
        color:${theme.colors.secondaryDark}
    }
`

export const StoreDropdown = Styled.div`
    position:absolute;
    top:20px;
    visibility: hidden;
    opacity: 0;
    transition: 300ms ease-in-out;
    left:-15rem;
`

export const Store = Styled.li`
position:relative;
list-style:none;

&:hover{
    ${StoreDropdown}{
        visibility:visible;
        opacity:1;
    },
    color:${theme.colors.primaryDark}  
}
`;

export const Ul = Styled.ul`
padding:0;

`
