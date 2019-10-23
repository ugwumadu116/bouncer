import React from "react";
import Styled from "styled-components";
import Rec1 from "../../assets/Rectangle1.png";
import Rec2 from "../../assets/Rectangle2.png";
import Rec3 from "../../assets/Rectangle3.png";
import { TypographyText } from "../../components/mockups";

const LatestNews = () => {
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
        height: 166px;
        width: 343px;
    `;
  const LatestCardTextContainer = Styled.div`
        display:flex;
        flex-direction: column;
        margin-left:20px;
        justify-content:space-around;
    `;
  const LatestNewWrapper = Styled.div`
        max-width: 1139px;
        margin: 3px auto;
        display:flex;
        justify-content:space-between;
        align-items: center;
    `;
    
  return (
    <>
      <BestSaleDIV>
        <BestSaleH1>LATEST NEWS</BestSaleH1>
      </BestSaleDIV>
      <LatestNewWrapper>
        <LatestCard>
          <img src={Rec1} alt="latest news1" />
          <LatestCardTextContainer>
            <TypographyText
              line_height="1.2"
              color="#c1c8ce"
              letter_spacing="0.35px"
              font_size="14px"
              font_weight="600"
            >
              01 Jan, 2015
            </TypographyText>
            <TypographyText
              line_height="2.4"
              color="#22262a"
              letter_spacing="normal"
              font_size="18px"
              font_weight="bold"
            >
              Typesetting industry
            </TypographyText>
            <TypographyText
              line_height="1.71"
              color="#22262a"
              letter_spacing="normal"
              font_size="14px"
              font_weight="normal"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </TypographyText>
          </LatestCardTextContainer>
        </LatestCard>
        <LatestCard>
          <img src={Rec2} alt="latest news2" />
          <LatestCardTextContainer>
            <TypographyText
              line_height="1.2"
              color="#c1c8ce"
              letter_spacing="0.35px"
              font_size="14px"
              font_weight="600"
            >
              01 Jan, 2015
            </TypographyText>
            <TypographyText
              line_height="2.4"
              color="#22262a"
              letter_spacing="normal"
              font_size="18px"
              font_weight="bold"
            >
              Typesetting industry
            </TypographyText>
            <TypographyText
              line_height="1.71"
              color="#22262a"
              letter_spacing="normal"
              font_size="14px"
              font_weight="normal"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </TypographyText>
          </LatestCardTextContainer>
        </LatestCard>
        <LatestCard>
          <img src={Rec3} alt="latest news3" />
          <LatestCardTextContainer>
            <TypographyText
              line_height="1.2"
              color="#c1c8ce"
              letter_spacing="0.35px"
              font_size="14px"
              font_weight="600"
            >
              01 Jan, 2015
            </TypographyText>
            <TypographyText
              line_height="2.4"
              color="#22262a"
              letter_spacing="normal"
              font_size="18px"
              font_weight="bold"
            >
              Typesetting industry
            </TypographyText>
            <TypographyText
              line_height="1.71"
              color="#22262a"
              letter_spacing="normal"
              font_size="14px"
              font_weight="normal"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </TypographyText>
          </LatestCardTextContainer>
        </LatestCard>
      </LatestNewWrapper>
    </>
  );
};

export default LatestNews;
