import React from "react";
import Styled from "styled-components";
import Mask from "../../assets/pic.png";
import { TypographyText } from "../../components/mockups";

const HeroTwo = () => {
  const HeroOneDIV = Styled.div`
        margin-top:36px;
        height: 600px;
        background-color: #33a0ff;
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
        flex-direction: column;
        justify-content:space-around;
    `;
  return (
    <HeroOneDIV>
      <HeroOneContainerDIV>
        <HeroOneTextDIV>
          <div className="textPhone">
            <TypographyText
              line_height="1.33"
              color="#ffffff"
              letter_spacing="normal"
              font_size="66px"
              font_weight="300"
            >
              iPhone 6 Plus
            </TypographyText>
          </div>
          <div className="textPhone">
            <TypographyText
              line_height="1.8"
              color="#ffffff"
              letter_spacing="normal"
              font_size="24px"
              font_weight="normal"
            >
              Performance and design. Taken right to the edge.
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
              SHOP NOW
            </TypographyText>
            
            <div className="Rectangle-15"></div>
          </div>
        </HeroOneTextDIV>
        <div className="image_container xk">
          <img src={Mask} alt="Iphone" />
        </div>
      </HeroOneContainerDIV>
    </HeroOneDIV>
  );
};

export default HeroTwo;
