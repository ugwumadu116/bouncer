import React from "react";
import Styled from "styled-components";
import Rec1 from "../../assets/feature1.png";
import Rec2 from "../../assets/feature2.png";
import Rec3 from "../../assets/feature3.png";
import { TypographyText } from "../../components/mockups";

const FeatureProducts = () => {
  const BestSaleDIV = Styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 137px 0px 61px 0px;
        margin-bottom: 47px;
        
    `;
  const BestSaleH1 = Styled.h1`
        font-size: 30px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: 0.75px;
        text-align: center;
        color: #22262a;

    `;

  const LatestCard = Styled.div`
        display:flex;
        height: 158px;
        width: 366px;
    `;
  const LatestCardTextContainer = Styled.div`
        display:block;
    `;
  const LatestNewWrapper = Styled.div`
        max-width: 1139px;
        margin: 3px auto;
        display:flexx;
        justify-content:space-betweenxx;
        align-items: centerxx;
    `;

  return (
    <>
      <BestSaleDIV>
        <BestSaleH1>FEATURED PRODUCTS</BestSaleH1>
      </BestSaleDIV>
      <LatestNewWrapper>
        <LatestCard>
          <img className="img_container" src={Rec1} alt="latest news1" />
          <LatestCardTextContainer>
            <TypographyText
              line_height="1.2"
              color="#262626"
              letter_spacing="0.35px"
              font_size="14px"
              font_weight="600"
            >
              Beats Solo 2 On Ear Headphones - Black
            </TypographyText>
            <TypographyText
              line_height="2.4"
              color="#22262a"
              letter_spacing="normal"
              font_size="18px"
              font_weight="bold"
            >
              start
            </TypographyText>
            <TypographyText
              line_height="1.71"
              color="#22262a"
              letter_spacing="normal"
              font_size="14px"
              font_weight="normal"
            >
              price
            </TypographyText>
          </LatestCardTextContainer>
        </LatestCard>
        <LatestCard>
          <img className="img_container" src={Rec2} alt="latest news2" />
          <LatestCardTextContainer>
            <TypographyText
              line_height="1.2"
              color="#262626"
              letter_spacing="0.35px"
              font_size="14px"
              font_weight="600"
            >
              H-Squared tvTray
            </TypographyText>
            <TypographyText
              line_height="2.4"
              color="#22262a"
              letter_spacing="normal"
              font_size="18px"
              font_weight="bold"
            >
              start
            </TypographyText>
            <TypographyText
              line_height="1.71"
              color="#22262a"
              letter_spacing="normal"
              font_size="14px"
              font_weight="normal"
            >
              price
            </TypographyText>
          </LatestCardTextContainer>
        </LatestCard>
        <LatestCard>
          <img className="img_container" src={Rec3} alt="latest news3" />
          <LatestCardTextContainer>
            <TypographyText
              line_height="1.2"
              color="#262626"
              letter_spacing="0.35px"
              font_size="14px"
              font_weight="600"
            >
              Netatmo Rain Gauge
            </TypographyText>
            <TypographyText
              line_height="2.4"
              color="#22262a"
              letter_spacing="normal"
              font_size="18px"
              font_weight="bold"
            >
              start
            </TypographyText>
            <TypographyText
              line_height="1.71"
              color="#22262a"
              letter_spacing="normal"
              font_size="14px"
              font_weight="normal"
            >
              price
            </TypographyText>
          </LatestCardTextContainer>
        </LatestCard>
      </LatestNewWrapper>
    </>
  );
};

export default FeatureProducts;
