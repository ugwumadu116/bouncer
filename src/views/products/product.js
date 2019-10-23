import React from 'react';
import NavOne from '../../components/common/Navbars';
import Footer from '../../components/common/Footer';
import Styled from "styled-components";
import { TypographyText } from '../../components/mockups';
import Home2 from '../homepage/home2';
import SideBar from '../../components/common/SideBar';
import HeroTwo from "../homepage/HeroTwo";


const Product = () => {
    const SearchDiv = Styled.div`
        display: flex;
        justify-content: center;
        align-items:center;
        margin: 36px auto 60px auto;
        height: 51px;
        opacity: 0.5;
        background-color: #f6f7f8;
    `;
    const ProductMainContainer = Styled.div`
        margin: 0px auto;
        max-width: 1140px;
        display:flex;
        align-items:flex-start;
        justify-content: space-between;
    `;
    const SidebarWrapper = Styled.div`
        width: 20%;
        margin-right:30px;
        
    `;
    const MainContentWrapper = Styled.div`
        width: 80%;
    `;
    const ProductFilterWrapper = Styled.div`
        height: 58px;
        margin: 26px 0px;
        padding: 0px 15px;
        border-radius: 4px;
        background-color: #f6f7f8;
        display:flex;
        align-items:center;
        justify-content: space-between;
    `;
    const ProductFilterWrapperSub = Styled.div`
        display:flex;
        
        align-items:center;
        justify-content: space-around;
    `;
    const SpaceDIV = Styled.div`
        margin: 0px 10px;
    `;
    const SpaceDIV2 = Styled.div`
        display: flex;
        
        align-items:center;
    `;
    

    return (
      <div>
        <NavOne />
        <SearchDiv>
          <TypographyText
            line_height="1.2"
            color="#33a0ff"
            letter_spacing="0.35px"
            font_size="14px"
            font_weight="600"
            position="left"
          >
            Home / Accesories /
          </TypographyText>

          <TypographyText
            line_height="1.2"
            color="#22262a"
            letter_spacing="0.35px"
            font_size="14px"
            font_weight="600"
            position="left"
          >
            Beat Solo2 on Ear Headphones - Black
          </TypographyText>
        </SearchDiv>

        <ProductMainContainer>
          <SidebarWrapper>
            <SideBar />
          </SidebarWrapper>

          <MainContentWrapper>
            <HeroTwo
              iPoneSize="42px"
              contentSize="16px"
              overflow="hidden"
              topMargin="0px"
              height="340px"
              width="auto"
            ></HeroTwo>
            <ProductFilterWrapper>
              <ProductFilterWrapperSub>
                <SpaceDIV>13 Items</SpaceDIV>
                <SpaceDIV>
                  <SpaceDIV2>
                    <SpaceDIV>Sort By</SpaceDIV>
                    <SpaceDIV>
                      <select>
                        <option>Name</option>
                        <option>Price</option>
                        <option>Hot</option>
                      </select>
                    </SpaceDIV>
                  </SpaceDIV2>
                </SpaceDIV>
                <SpaceDIV>
                  <SpaceDIV2>
                    <SpaceDIV>Sort By</SpaceDIV>
                    <SpaceDIV>
                      <select>
                        <option>Name</option>
                        <option>Price</option>
                        <option>Hot</option>
                      </select>
                    </SpaceDIV>
                    <SpaceDIV>Show</SpaceDIV>
                    <SpaceDIV>
                      <select>
                        <option>12</option>
                        <option>24</option>
                        <option>48</option>
                      </select>
                    </SpaceDIV>
                  </SpaceDIV2>
                </SpaceDIV>
              </ProductFilterWrapperSub>
              <ProductFilterWrapperSub>
                <SpaceDIV>Grid</SpaceDIV>
                <SpaceDIV>List</SpaceDIV>
              </ProductFilterWrapperSub>
            </ProductFilterWrapper>
          </MainContentWrapper>
        </ProductMainContainer>

        <Footer />
      </div>
    );
}

export default Product;
