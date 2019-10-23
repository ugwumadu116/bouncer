import React from "react";
import Styled from "styled-components";
import Iphone6 from "../../assets/pic.png";
import oculus from "../../assets/oculus.png";
import leftPng from "../../assets/left.png";
import { TypographyText } from "../../components/mockups";

const ProductsInfo = () => {
  const HeroOneContainerDIV = Styled.section`
        max-width: 1139px;
        margin: 0px auto;
        display:flex;
        justify-content:center;
        align-items: center;
        position:relative;
        top:-37px
    `;
  const HeroOneTextDIVContainer = Styled.div`
        display:block;
        width: 390px;
        height: 220px;
        padding: 20px;
        overflow:hidden;
        background-color: #ff6875;
    `;
  const HeroOneTextDIVContainer2 = Styled(HeroOneTextDIVContainer)`
        background-color: #f6f7f8;
    `;
  const HeroOneTextDIVContainer3 = Styled(HeroOneTextDIVContainer)`
        background-color: #c1c8ce;
        display:block;
    `;
  
  const HeroOneTextDIV = Styled.div`
        display:flex;
        width:70%; 
        flex-direction: column;
        justify-content:space-around;
    `;
  const HeroOneTextDIV3 = Styled(HeroOneTextDIV)`
        width:50%; 
    `;
  const HeroOneTextDIV2 = Styled(HeroOneTextDIV)`
        flex-direction: row;
    `;
  const TextDIVWrapper = Styled.div`
        padding-bottom: 10px;
    `;
  return (
    <HeroOneContainerDIV>
      <HeroOneTextDIVContainer>
        <HeroOneTextDIV>
          <TextDIVWrapper>
            <TypographyText
              line_height="1.2"
              color="#ffffff"
              letter_spacing="normal"
              font_size="24px"
              font_weight="normal"
            >
              iPhone 6
            </TypographyText>
          </TextDIVWrapper>
          <TextDIVWrapper>
            <TypographyText
              line_height="1.57"
              color="#ffffff"
              letter_spacing="normal"
              font_size="12px"
              font_weight="normal"
            >
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
            </TypographyText>
          </TextDIVWrapper>
          <TextDIVWrapper>
            <TypographyText
              line_height="1.57"
              color="#ffffff"
              letter_spacing="normal"
              font_size="24px"
              font_weight="bold"
            >
              $399
            </TypographyText>
          </TextDIVWrapper>
        </HeroOneTextDIV>
        <div className="image_container xx1">
          <img src={Iphone6} alt="Iphone" />
        </div>
      </HeroOneTextDIVContainer>
      <HeroOneTextDIVContainer2>
        <div className="image_container xx2">
          <img src={oculus} alt="Iphone" />
        </div>
        <HeroOneTextDIV2>
          <TextDIVWrapper>
            <TypographyText
              line_height="1.2"
              color="#22262a"
              letter_spacing="normal"
              font_size="24px"
              font_weight="bold"
            >
              Oculus Rift
            </TypographyText>
          </TextDIVWrapper>
          <TextDIVWrapper>
            <TypographyText
              line_height="1.57"
              color="#22262a"
              letter_spacing="normal"
              font_size="24px"
              font_weight="normal"
            >
              $399
            </TypographyText>
          </TextDIVWrapper>
        </HeroOneTextDIV2>
      </HeroOneTextDIVContainer2>
      <HeroOneTextDIVContainer3>
        <HeroOneTextDIV3>
          <TextDIVWrapper>
            <TypographyText
              line_height="1.2"
              color="#22262a"
              letter_spacing="normal"
              font_size="24px"
              font_weight="bold"
            >
              GoPro Hero 6
            </TypographyText>
          </TextDIVWrapper>
          <TextDIVWrapper>
            <TypographyText
              line_height="1.57"
              color="#22262a"
              letter_spacing="normal"
              font_size="12px"
              font_weight="normal"
            >
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
            </TypographyText>
          </TextDIVWrapper>
          <TextDIVWrapper>
            <TypographyText
              line_height="1.57"
              color="#22262a"
              letter_spacing="normal"
              font_size="24px"
              font_weight="normal"
            >
              $299
            </TypographyText>
          </TextDIVWrapper>
        </HeroOneTextDIV3>
        <div className="image_container xx">
          <img src={leftPng} alt="Iphone" />
        </div>
      </HeroOneTextDIVContainer3>
    </HeroOneContainerDIV>
  );
};

export default ProductsInfo;
