import Styled from "styled-components";
import Text from "../../components/text"


export const Link = Styled(Text)`

    text-decoration:none;
    padding:0 0.3rem 0 0.3rem;
`;

const SectionWrapper = Styled.div`
    padding-top: 3.75rem;
    .containerx{
        max-width: 70.625rem;
        margin: 0px auto;
        display: flex;
        justify-content: space-between;
        .side-sect{
            width: 22%;
            @media only screen and (max-width:478px){
                position: relative;
                left: ${({show}) => show ? "0px": "-100px"};
                display: ${({show}) => show ? "block": "none"};
            }
            .filter-category{
                margin-bottom: 1.875rem;
            }
        }
        .main-sect{
            width: 75%;
            display: flex;
            flex-direction: column;
            
            @media only screen and (max-width:478px){
                width:100%;
            }
            .banner{
                width: 100%;
                position: relative;
                img{
                width: 100%;
                height: 100%;
                    }
                }
                .shop_now{
                height: 2.5rem;
                width: 8rem;
                position:absolute;
                top:60%;
                left:5%;
                cursor: pointer;
            }
            }
            
            .layout-container{
                width:100%
            }

            


        }
    }


`;

export default SectionWrapper 