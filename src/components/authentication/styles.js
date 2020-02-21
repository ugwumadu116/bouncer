import Styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "../theme";
import Button from "../button";

export const LoginContainer = Styled.div`
    
    width:100%;
    @media screen and (max-width: 900px){
         .loginImageContainer{
             display: none;
             
         }
         .loginForm{
             width: 100%;
         }
         .w-70{
             width:100%;
         }

    }
    
    .loginImageContainer{
        width: 100%;
        
        img{
           
            width:100%;
        }    
    }
    .loginForm{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        
        button{
            width: 100%;
            justify-content: center;
            margin: 2rem 0;
        }
        label{
            margin-top: 1.5rem;
            font-weight: bold;
        }
    .boldLink{
      font-size: ${theme.fontsize.small};
      font-weight: bold;
    

    }
    }
    
    .footer{
        display:flex;
        justify-content: space-between;

        
    }
    .active{
        border-bottom: 3px ${theme.colors.dangerDark} solid;
    }
    
`;

export const Navigation = Styled(NavLink)`
    text-decoration:none;
    background:none;
    &:hover{
        color:${theme.colors.dangerDark}
    }
    &:focus{
        color:${theme.colors.primaryDarker}
    }
`;

export const Logo = Styled.div`
   display: flex;
   align-items:center;
   height: 100%;
`;
export const Wrapper = Styled.div`
  
   color:${theme.colors.dangerDark};
   
`;
export const Wrapper1 = Styled.div`

`;
export const CustomButton = Styled(Button)`
width:100%
margin-top: 15px

`;
