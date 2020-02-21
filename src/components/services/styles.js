import Styled, { keyframes } from "styled-components";

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

const Container = Styled.div`
    width: 100%;
    animation: ${ascend} 2s linear 0s 1;
    div{
        @media (max-width: 840px){
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }
`;

export default Container;
