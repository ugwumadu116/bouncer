import React from 'react';
import Styled from 'styled-components';
import { CardWrapper } from '../../components/common';

const BestSale = () => {
    const BestSaleDIV = Styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 40px;
        margin-bottom: 47px;
        
    `;
    const BestSaleDIV2 = Styled(BestSaleDIV)`
        
        flex-direction:column;
        
    `;
    const LoadMoreDIV = Styled.div`
        height: 3px;
        width: 80px;
        background-color: #33a0ff;
        
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
    const BestSaleANCHOR = Styled.button`
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.36;
        letter-spacing: normal;
        text-align: left;
        color: #33a0ff;
        border: none;
        cursor:pointer;
        background: transparent;

    `;
    const HomeNavTwo = Styled.div`
        margin: 0px auto;
        max-width: 660px;
        height: 19px;
        display:flex;
        justify-content:space-between;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: 0.35px;
        text-align: center;
        color: #22262a;
    `;
    const ProductsSale = Styled.section`
        max-width: 1139px;
        margin: 36px auto;
        display:flex;
        flex-flow: row wrap;
        justify-content:space-between;
        align-items: center;
    `;
    return (
      <>
        <BestSaleDIV>
          <BestSaleH1>Best Sale</BestSaleH1>
        </BestSaleDIV>
        <HomeNavTwo>
          <h4>ALL</h4>
          <h4>Mac</h4>
          <h4>iPhone</h4>
          <h4>iPad</h4>
          <h4>iPod</h4>
          <h4>Accessories</h4>
        </HomeNavTwo>
        <ProductsSale>
          <CardWrapper flex_direction="column"></CardWrapper>
          <CardWrapper flex_direction="column"></CardWrapper>
          <CardWrapper flex_direction="column"></CardWrapper>
          <CardWrapper flex_direction="column"></CardWrapper>
          <CardWrapper flex_direction="column"></CardWrapper>
          <CardWrapper flex_direction="column"></CardWrapper>
          <CardWrapper flex_direction="column"></CardWrapper>
          <CardWrapper flex_direction="column"></CardWrapper>
        </ProductsSale>
        <BestSaleDIV2>
          <BestSaleANCHOR>LOAD MORE</BestSaleANCHOR>
          <LoadMoreDIV></LoadMoreDIV>
        </BestSaleDIV2>
        
      </>
    );
}
 
export default BestSale;
