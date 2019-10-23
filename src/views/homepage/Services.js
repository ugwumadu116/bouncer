import React from "react";
import Refund from "../../assets/refund.png";
import Shipping from "../../assets/shipping.png";
import Support from "../../assets/support.png";
import Styled from "styled-components";
import { TypographyText } from "../../components/mockups";

const Services = () => {
  const ServicesSection = Styled.section`
        max-width: 1139px;
        margin: 0px auto;
    `;
  const ServiceDivContainer = Styled.div`
        display:flex;
        margin-top:98px;
        justify-content: space-between;
        align-items: center;
    `;
  const ServiceCard = Styled.div`
        display:flex;
        height: 237px;
        flex-direction:column;
        justify-content: space-between;
        align-items: center;
    `;
  return (
    <div>
      <ServicesSection>
        <ServiceDivContainer>
          <ServiceCard>
            <img src={Refund} className="cc" alt="refund" />
            <div className="cc">
              <TypographyText
                line_height="1.8"
                color="#22262a"
                letter_spacing="normal"
                font_size="24px"
                font_weight="600"
              >
                SUPPORT 24/7
              </TypographyText>
            </div>
            <div className="cc">
              <TypographyText
                line_height="1.71"
                color="#22262a"
                letter_spacing="normal"
                font_size="14px"
                font_weight="normal"
                position="center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor minim veniam, quis nostrud reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </TypographyText>
            </div>
          </ServiceCard>
          <ServiceCard>
            <img src={Shipping} className="cc" alt="refund" />
            <div className="cc">
              <TypographyText
                line_height="1.8"
                color="#22262a"
                letter_spacing="normal"
                font_size="24px"
                font_weight="600"
              >
                SUPPORT 24/7
              </TypographyText>
            </div>
            <div className="cc">
              <TypographyText
                line_height="1.71"
                color="#22262a"
                letter_spacing="normal"
                font_size="14px"
                font_weight="normal"
                position="center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor minim veniam, quis nostrud reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </TypographyText>
            </div>
          </ServiceCard>
          <ServiceCard>
            <img src={Support} className="cc" alt="refund" />
            <div className="cc">
              <TypographyText
                line_height="1.8"
                color="#22262a"
                letter_spacing="normal"
                font_size="24px"
                font_weight="600"
              >
                SUPPORT 24/7
              </TypographyText>
            </div>
            <div className="cc">
              <TypographyText
                line_height="1.71"
                color="#22262a"
                letter_spacing="normal"
                font_size="14px"
                font_weight="normal"
                position="center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor minim veniam, quis nostrud reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </TypographyText>
            </div>
          </ServiceCard>
        </ServiceDivContainer>
      </ServicesSection>
    </div>
  );
};

export default Services;
