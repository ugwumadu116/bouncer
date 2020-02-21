import styled from "styled-components";
import backgroundColor from "../../color/mixins";


export const CardWrapper = styled.div`
         display: flex;
         flex-direction: row;
         width: 100%;
         margin-bottom: 1.25rem;
         & .imageWrapper {
           display: flex;
           justify-content: center;
           flex-direction: column;
           width: 16.875rem;
           height: 270px;
           margin-right: 1.875rem;
           border-radius: 4px;
           border: solid 3px #f6f7f8;
         }
         & .imageContainer {
           width: 14.75rem;
           height: 9.5625rem;
           img {
             width: 100%;
             height: 100%;
           }
         }
         & .textContainer {
           hr {
             border: 2px solid #f6f7f8;
           }
           .stockName {
             font-size: 1.5rem;
             font-weight: 600;
             line-height: 1.8;
             margin: 0px;
             text-align: left;
             color: #22262a;
             width: auto;
           }
         }
         & .stockName {
           width: 10.125rem;
         }
         & .product_price {
           font-size: 1rem;
           line-height: 1.05;
           letter-spacing: 0.4px;
           text-align: center;
           color: #ff4858;
         }
         & .product_old_price {
           font-size: 1rem;
           text-decoration: line-through;
           line-height: 1.05;
           letter-spacing: 0.4px;
           text-align: center;
           color: #c1c8ce;
           margin-left: 20px;
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
         position: relative;
         top: -45px;
         ${backgroundColor}
       `;

