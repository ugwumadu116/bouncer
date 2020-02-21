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

const Wrapper = Styled.div`
animation: ${ascend} 2s linear 0s 1;
.carouselWrapper{
    background-image:linear-gradient(63deg, #ff4858 -25%, #8f65ff 118%);
}
.slick-slider{
    max-width: 1240px;
    margin: 0 auto;
    position:relative;
    .slick-prev,.slick-next{
        position:absolute;
        top:calc(50% - 22px);
        z-index:1;
        background: none;
        border: none;
        outline: none;
        color:transparent;
      
    }
    .slick-prev{
        left:0
    }
    .slick-next{
        right:0;
    }
    .slick-prev::after {
        content: "<";
        display:block;
        color: white;
        font-size:1rem;
        opacity:0.5;
}
    .slick-next::after {
        content: ">";
        display:block;
        color: white;
        font-size:1rem;
        opacity:0.5;
    }
}
.slick-list{

        margin: 0px auto;
        width:100%;
            .carouselItems{
                display: flex !important;
                justify-content: space-between;
                align-items: center;
                padding: 0 5.625rem;
                flex-direction:row;
                @media (max-width: 640px){
                    flex-direction:column;
                }
                .textWrapper{
                    text-align:left;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    width:28%;
                    @media only screen and (max-width: 1024px) {
                        width: 100%;
                    }
                    .itemInfo{
                        margin-top:auto;
                        margin-bottom:auto;
                        display:flex;
                        flex-direction:column;
                        align-content:space-between;
                        .underLine{
                            width: 2.4375rem;
                            border-bottom: 3px solid #ffffff;
                            cursor:pointer;
                        }
                    }
                }
                .productImg{
                    width: 100%;
                    max-width: 729px;
                    
                }
                
            }
            
        }
        
    }

`;

export default Wrapper;
