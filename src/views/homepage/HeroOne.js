import React from 'react';
import Styled from 'styled-components';
import Mask from '../../assets/Mask.png';
import { TypographyText } from '../../components/mockups';
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa";



const HeroOne = () => {
    const HeroOneDIV = Styled.div`
        margin-top:36px;
        hessight: 650px;
        background-image: linear-gradient(to right, #FF4858, #8F65FF);
        @media (max-width: 768px) {
            display:flex;
            align-items: center;
        }
    `;
    const HeroOneContainerDIV = Styled.section`
        max-width: 1139px;
        margin: 0px auto;
        display:flex;
        justify-content:space-between;
        align-items: center;
        @media (max-width: 768px) {
            display:flex;
            justify-content:space-between;
        }
    `;
    const HeroOneTextDIV = Styled.div`
        display:flex;
         width: 330px;
        flex-direction: column;
        justify-content:space-around;
    `;
    return (
      <HeroOneDIV>
        <HeroOneContainerDIV>
          <FaChevronLeft className="chevronLeft" size="30px" />
          <HeroOneTextDIV>
            <div className="textPhone">
              <TypographyText
                line_height="1.2"
                color="#ffffff"
                letter_spacing="normal"
                font_size="36px"
                font_weight="bold"
              >
                iPhone X
              </TypographyText>
            </div>
            <div className="textPhone">
              <TypographyText
                line_height="1.57"
                color="#ffffff"
                letter_spacing="normal"
                font_size="14px"
                font_weight="normal"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </TypographyText>
            </div>
            <div className="textPhone">
              <TypographyText
                line_height="1.57"
                color="#ffffff"
                letter_spacing="normal"
                font_size="14px"
                font_weight="bold"
              >
                More
              </TypographyText>
              <div className="Rectangle-14"></div>
            </div>
          </HeroOneTextDIV>
          <div className="image_container">
            <img src={Mask} alt="Iphone" />
          </div>
          <FaChevronRight className="chevronRight" size="40px" />
        </HeroOneContainerDIV>
      </HeroOneDIV>
    );
}
 
export default HeroOne;
