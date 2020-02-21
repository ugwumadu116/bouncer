import styled from "styled-components";
import backgroundColor, { color } from "../../color/mixins";


export const CardWrapperDIV = styled.div`
         display: flex;
         height: 224px;
         justify-content: space-around;
         align-items: center;
         margin-bottom: 1.875rem;
         position: relative;
         border: solid 3px #f6f7f8;
         & .imageContainer {
           width: 14.75rem;
           height: 153px;
           img {
             width: 100%;
             height: 100%;
           }
         }
         & .iconContainer {
           width: 15rem;
           height: 183px;
           display: ${({ show }) => show};
           justify-content: center;
           align-items: center;
           cursor: pointer;
           opacity: 0.95;
           background-color: #fafafb;
           position: absolute;
           top: 20px;
           & .heart {
             margin-left: 10px;
           }
         }
         & .iconWrapper {
           width: 2.1rem;
           height: 33.6px;
           display: flex;
           cursor: pointer;
           align-items: center;
           justify-content: center;
           border: solid 2px rgba(51, 160, 255, 0.25);
           border-radius: 50%;
           -webkit-border-radius: 50%;
           -moz-border-radius: 50%;
           -ms-border-radius: 50%;
           -o-border-radius: 50%;
         }
        
       `;

export const HotWrapper = styled.div`
         width: 40px;
         text-align: center;
         color: white;
         border-radius: 2px;
         font-size: 12px;
         font-weight: 600;
         line-height: 1.67;
         ${backgroundColor}
       `;
export const IconWrapper = styled.div`
  width: 2.1rem;
  height: 33.6px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: solid 2px rgba(51, 160, 255, 0.25);
  ${backgroundColor}
  ${color}
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
`;
