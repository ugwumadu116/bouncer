import React from "react";
import Styled from "styled-components";
import Iphone6 from "../../assets/pic.png";
import { TypographyText } from "../../components/mockups";

const ProductsInfo = () => {
  const HeroOneContainerDIV = Styled.section`
        max-width: 1139px;
        margin: 0px auto;
        display:flex;
        justify-content:center;
        align-items: center;
        @media (max-width: 768px) {
            display:flex;
            justify-content:space-between;
        }
    `;
  const HeroOneTextDIVContainer = Styled.div`
        display:flex;
        width: 390px;
        height: 250px;
        padding: 10px;
        background-color: #ff6875;
    `;
  const HeroOneTextDIVContainer2 = Styled(HeroOneTextDIVContainer)`
        background-color: #f6f7f8;
    `;
  const HeroOneTextDIVContainer3 = Styled(HeroOneTextDIVContainer)`
        background-color: #c1c8ce;
    `;
  
  const HeroOneTextDIV = Styled.div`
        displaggy:flex;
        flex-direction: column;
        justify-contexxnt:space-around;
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
              font_weight="bold"
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
        <div className="image_container">
          <img src={Iphone6} alt="Iphone" />
        </div>
      </HeroOneTextDIVContainer>
      <HeroOneTextDIVContainer2>
        <HeroOneTextDIV>
          <TextDIVWrapper>
            <TypographyText
              line_height="1.2"
              color="#22262a"
              letter_spacing="normal"
              font_size="24px"
              font_weight="bold"
            >
              iPhone 6
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
              font_weight="bold"
            >
              $399
            </TypographyText>
          </TextDIVWrapper>
        </HeroOneTextDIV>
        <div className="image_container">
          <img src={Iphone6} alt="Iphone" />
        </div>
      </HeroOneTextDIVContainer2>
      <HeroOneTextDIVContainer3>
        <HeroOneTextDIV>
          <TextDIVWrapper>
            <TypographyText
              line_height="1.2"
              color="#22262a"
              letter_spacing="normal"
              font_size="24px"
              font_weight="bold"
            >
              iPhone 6
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
              font_weight="bold"
            >
              $399
            </TypographyText>
          </TextDIVWrapper>
        </HeroOneTextDIV>
        <div className="image_container">
          <img src={Iphone6} alt="Iphone" />
        </div>
      </HeroOneTextDIVContainer3>
    </HeroOneContainerDIV>
  );
};

export default ProductsInfo;
