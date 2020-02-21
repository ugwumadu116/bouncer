import Styled from "styled-components";
import backgroundColor from "../color/mixins";

const HeroOneDIV = Styled.div`
background-color: #33A0FF;
${backgroundColor};
overflow: "visible";
width: 100%;
}
`;


const HeroOneContainerDIV = Styled.section`
max-width: 80%;
max-height: 611px;
margin: 0px auto;
display:flex;
justify-content:space-between;
align-items: flex-start;

@media (max-width: 800px) {
  max-width:100%;
  padding-left: 10px;
  align-items: flex-end;   
}
`;


const HeroOneTextDIV = Styled.div`
display:flex;
flex-direction: column;
justify-content:space-around;
`;

const ImageDIV = Styled.div`
position: relative;
top: -98px;
img{
  max-width:100%;
}
@media (max-width: 800px) {
  position: static;
  background-color: 33A0FF;
  ${backgroundColor};
}
@media (max-width: 1024px){
  position: static;
}      
`;

export { HeroOneContainerDIV, HeroOneDIV, HeroOneTextDIV, ImageDIV };
