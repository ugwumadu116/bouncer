import styled from "styled-components";

export const CardWrapperDIV = styled.div`
         display: flex;
         width: 18.4375rem;
         height: 9.875rem;
         justify-content: space-between;
         align-items: flex-start;
         margin-bottom: 1.875rem;
         & .imageContainer {
           width: 10.125rem;
           height: 9.875rem;
           margin-right: 1.25rem;
           border: solid 3px #f6f7f8;

           img {
             width: 100%;
             height: 100%;
           }
         }
         & .footer {
           width: 40%;
           text-align: left;
           word-wrap: break-word;
           font-size: 14px;
           display: flex;
           align-items: left;
           justify-content: space-between;
           flex-direction: column;
           span {
             margin: 0.875rem 0;
           }
         }
       `;



