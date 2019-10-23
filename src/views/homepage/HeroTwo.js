import React from "react";
import Styled from "styled-components";
import Mask from "../../assets/pic.png";
import { TypographyText } from "../../components/mockups";

const HeroTwo = ({ contentSize, iPoneSize, topMargin, height, width , overflow}) => {
  const HeroOneDIV = Styled.div`
        margin-top:${topMargin || "36px"}
        height: ${height || "600px"}
        background-color: #33a0ff;
        overflow:${overflow || "visible"}
        @media (max-width: 768px) {
            display:flex;
            align-items: center;
        }
    `;
  const HeroOneContainerDIV = Styled.section`
        max-widthxx: ${width || "1139px"};
        margin: 0px auto;
        display:flex;
        justify-content:space-between;
        align-items: flex-start;
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
  const ImageDIV = Styled.div`
        position: relative;
        top: -60px;
        bottom: 0px;
        height: 100%;
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
              font_size={iPoneSize || "66px"}
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
              font_size={contentSize || "24px"}
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
        <ImageDIV className="image_container">
          <img src={Mask} alt="Iphone" />
        </ImageDIV>
      </HeroOneContainerDIV>
    </HeroOneDIV>
  );
};

export default HeroTwo;
