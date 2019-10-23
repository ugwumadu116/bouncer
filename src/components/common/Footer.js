import React from "react";
import logo from "../../assets/logoW.png";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import Styled from "styled-components";
import { TypographyText } from "../../components/mockups";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const ServicesSection = Styled.section`
        max-width: 1139px;
        margin: 0px auto;
    `;

  const ServiceDivContainer = Styled.div`
        display:flex;
        margin-top:98px;
        justify-content: space-between;
    `;
    const LastFooter = Styled(ServiceDivContainer)`
        margin:18px 0px;
    `;
    const LastFooterIcons = Styled.div`
        display:flex;
        width:200px;
        justify-content: space-between;
    `;
  const ServiceDivContainer2 = Styled(ServiceDivContainer)`
        margin-top:45px;
    `;
  const ServiceCard = Styled.div`
        display:block;
        width: 270px;
    `;
  const ServiceCard2 = Styled.div`
        display:block;
    `;
    const displayLinks = () => {
        
        return [
          "About Us",
          "Information",
          "Privacy Policy",
          "Terms & Conditions"
        ].map((item, i) => (
          <div key={i} className="ccxv">
            <TypographyText
              line_height="2.29"
              color="#262626"
              letter_spacing="normal"
              font_size="14px"
              font_weight="normal"
              position="left"
            >
              {item}
            </TypographyText>
          </div>
        ));
    }
  return (
    <>
      <div className="footerDiv">
        <ServicesSection>
          <ServiceDivContainer>
            <ServiceCard>
              <img src={logo} className="cclogo" alt="refund" />

              <div className="cc">
                <TypographyText
                  line_height="1.67"
                  color="#22262a"
                  letter_spacing="normal"
                  font_size="12px"
                  font_weight="normal"
                  position="left"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever.Since the 1500s, when an unknown
                  printer.
                </TypographyText>
              </div>
            </ServiceCard>
            <ServiceCard>
              <div>
                <TypographyText
                  line_height="1.56"
                  color="#22262a"
                  letter_spacing="normal"
                  font_size="18px"
                  font_weight="600"
                  position="left"
                >
                  Follow us
                </TypographyText>
              </div>
              <div className="cc">
                <TypographyText
                  line_height="1.67"
                  color="#22262a"
                  letter_spacing="normal"
                  font_size="12px"
                  font_weight="normal"
                  position="left"
                >
                  Since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </TypographyText>
              </div>
              <div className="cc">
                <FaFacebookF
                  className="footerIcon"
                  size="12px"
                  color="#385c8e"
                />
                <FaTwitter size="12px" color="#03a9f4" />
              </div>
            </ServiceCard>
            <ServiceCard>
              <div>
                <TypographyText
                  line_height="1.56"
                  color="#22262a"
                  letter_spacing="normal"
                  font_size="18px"
                  font_weight="600"
                  position="left"
                >
                  Contact us
                </TypographyText>
              </div>
              <div className="cc">
                <TypographyText
                  line_height="1.67"
                  color="#22262a"
                  letter_spacing="normal"
                  font_size="12px"
                  font_weight="normal"
                  position="left"
                >
                  My Company , 4578 Marmora Road, Glasgow D04 89GR
                  <br /> Call us now: 0123-456-789 <br /> Email:
                  support@whatever.com
                </TypographyText>
              </div>
            </ServiceCard>
          </ServiceDivContainer>
          <div className="Rectangle-1-copy-30"></div>
          <ServiceDivContainer2>
            <ServiceCard2>
              <div>
                <TypographyText
                  line_height="1.56"
                  color="#22262a"
                  letter_spacing="normal"
                  font_size="18px"
                  font_weight="600"
                  position="left"
                >
                  Information
                </TypographyText>
              </div>

              {displayLinks()}
            </ServiceCard2>
            <ServiceCard2>
              <div>
                <TypographyText
                  line_height="1.56"
                  color="#22262a"
                  letter_spacing="normal"
                  font_size="18px"
                  font_weight="600"
                  position="left"
                >
                  Service
                </TypographyText>
              </div>

              {displayLinks()}
            </ServiceCard2>
            <ServiceCard2>
              <div>
                <TypographyText
                  line_height="1.56"
                  color="#22262a"
                  letter_spacing="normal"
                  font_size="18px"
                  font_weight="600"
                  position="left"
                >
                  Extras
                </TypographyText>
              </div>

              {displayLinks()}
            </ServiceCard2>
            <ServiceCard2>
              <div>
                <TypographyText
                  line_height="1.56"
                  color="#22262a"
                  letter_spacing="normal"
                  font_size="18px"
                  font_weight="600"
                  position="left"
                >
                  My Account
                </TypographyText>
              </div>

              {displayLinks()}
            </ServiceCard2>
            <ServiceCard2>
              <div>
                <TypographyText
                  line_height="1.56"
                  color="#22262a"
                  letter_spacing="normal"
                  font_size="18px"
                  font_weight="600"
                  position="left"
                >
                  Useful Links
                </TypographyText>
              </div>

              {displayLinks()}
            </ServiceCard2>
            <ServiceCard2>
              <div>
                <TypographyText
                  line_height="1.56"
                  color="#22262a"
                  letter_spacing="normal"
                  font_size="18px"
                  font_weight="600"
                  position="left"
                >
                  Our Offers
                </TypographyText>
              </div>

              {displayLinks()}
            </ServiceCard2>
          </ServiceDivContainer2>
        </ServicesSection>
      </div>
      <ServicesSection>
        <LastFooter>
          <div>
            <TypographyText
              line_height="1.71"
              color="#c1c8ce"
              letter_spacing="normal"
              font_size="14px"
              font_weight="normal"
              position="left"
            >
              © 2018 Ecommerce theme by www.bisenbaev.com
            </TypographyText>
          </div>
          <LastFooterIcons>
            <img src={p1} alt="refund" />
            <img src={p2} alt="refund" />
            <img src={p3} alt="refund" />
            <img src={p4} alt="refund" />
          </LastFooterIcons>
        </LastFooter>
      </ServicesSection>
    </>
  );
};

export default Footer;
