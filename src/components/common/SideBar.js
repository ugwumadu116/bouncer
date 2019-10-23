import React from 'react';
import Styled from 'styled-components';
import { ColorDiv } from "../../components/mockups";

const SideBar = () => {
    

    const Sidebar = Styled.div`
        max-widthxx: 670px;
    `;
    const Base = Styled.div`
        height: 350px;
        border-radius: 4px;
        margin-bottom: 30px;
        padding:20px;
        background-color: #f6f7f8;
    `;
    const Price = Styled(Base)`
        height: 134px;
    `;
    const Brand = Styled(Base)`
        height: 235px;
    `;
    const Color = Styled(Base)`
        height: 113px;
    `;
    const More = Styled(Base)`
        height: 46px;
        display: flex;
        justify-content: center;
        align-items:center;
    `;
    const BaseTopic = Styled.h2`
        font-size: 18px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        text-align: left;
        color: #22262a;
        margin-Bottom: 28px;
    `;
    const BaseItem = Styled.div`
        display: flex;
        justify-content: space-between;
        margin-Bottom: 23px;
    `;
    const BaseValuesLeft = Styled.span`
        font-size: 14px;
        cursor: pointer;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: 0.35px;
        text-align: left;
        color: #262626;
    `;
    const BaseValuesLeft2 = Styled(BaseValuesLeft)`
        color: #33a0ff;
    `;
    const BaseValues = Styled.span`
        font-size: 14px;
        opacity: 0.35;
        cursor: pointer;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: 0.35px;
        text-align: right;
        color: #22262a;
    `;
    const MoreValues = Styled.span`
         font-size: 14px;
        cursor: pointer;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: 0.35px;
        text-align: center;
        color: #262626;
    `;
    const BaseValues2 = Styled(BaseValues)`
        color: #33a0ff;
        opacity: 1;
    `;
    return (
      <>
        <Sidebar>
          <Base>
            <BaseTopic>ACCESSORIES</BaseTopic>
            <BaseItem>
              <BaseValuesLeft>Apple Car</BaseValuesLeft>
              <BaseValues>2</BaseValues>
            </BaseItem>
            <BaseItem>
              <BaseValuesLeft2>Air port & wireless</BaseValuesLeft2>
              <BaseValues2>48</BaseValues2>
            </BaseItem>
            <BaseItem>
              <BaseValuesLeft>Cables & Docks</BaseValuesLeft>
              <BaseValues>14</BaseValues>
            </BaseItem>
            <BaseItem>
              <BaseValuesLeft>Charging Devices</BaseValuesLeft>
              <BaseValues>15</BaseValues>
            </BaseItem>
            <BaseItem>
              <BaseValuesLeft>Connected home</BaseValuesLeft>
              <BaseValues>1</BaseValues>
            </BaseItem>
            <BaseItem>
              <BaseValuesLeft>Headphones</BaseValuesLeft>
              <BaseValues>95</BaseValues>
            </BaseItem>
          </Base>

          <Price>
            <BaseTopic>PRICES</BaseTopic>
            <BaseItem>
              <BaseValuesLeft>Ranger:</BaseValuesLeft>
              <BaseValues>$13.99 - $25.99</BaseValues>
            </BaseItem>
          </Price>

          <Color>
            <BaseTopic>COLOR</BaseTopic>
            <BaseItem>
              <ColorDiv  color="#006cff" width="20px" height="20px" />

              <ColorDiv color="#fc3e39" width="20px" height="20px" />

              <ColorDiv color="#171717" width="20px" height="20px" />

              <ColorDiv color="#fff600" width="20px" height="20px" />

              <ColorDiv color="#ff00b4" width="20px" height="20px" />

              <ColorDiv color="#efdfdf" width="20px" height="20px" />
            </BaseItem>
          </Color>

          <Brand>
            <BaseTopic>BRAND</BaseTopic>
            <BaseItem>
              <BaseValuesLeft>Apple</BaseValuesLeft>
              <BaseValues>99</BaseValues>
            </BaseItem>
            <BaseItem>
              <BaseValuesLeft2>LG</BaseValuesLeft2>
              <BaseValues2>99</BaseValues2>
            </BaseItem>
            <BaseItem>
              <BaseValuesLeft>Samsung</BaseValuesLeft>
              <BaseValues>99</BaseValues>
            </BaseItem>
            <BaseItem>
              <BaseValuesLeft>Siemens</BaseValuesLeft>
              <BaseValues>99</BaseValues>
            </BaseItem>
          </Brand>

          <More>
            <MoreValues>More</MoreValues>
          </More>
        </Sidebar>
      </>
    );
}
 
export default SideBar;
