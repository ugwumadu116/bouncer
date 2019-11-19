import React, { useState, useContext } from "react";
import NavOne from '../../components/common/Navbars';
import Footer from '../../components/common/Footer';
import Styled from "styled-components";
import { TypographyText } from '../../components/mockups';
import SideBar from '../../components/common/SideBar';
import HeroTwo from "../homepage/HeroTwo";
import { CardWrapper } from "../../components/common";
import { FaBars, FaGripHorizontal } from "react-icons/fa";
import { BouncerProductsContext } from "../../context/BouncerProductsContext";


const Product = () => {
  const {bouncerProducts } = useContext(BouncerProductsContext)
    const [grid, setGrid] = useState({ active: false, flex_direction:"row"});
    const [column, setColumn] = useState({ active: true, flex_direction: "column" });

    const handleColumnDisplayStyle = () => {
      setGrid({ active: false, flex_direction: "row" });
      setColumn({ active: true, flex_direction: "column" });
    }
    const handleGridDisplayStyle = () => {
      setGrid({ active: true, flex_direction: "row" });
      setColumn({ active: false, flex_direction: "column" });
    }

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
    const PaginationWrapper = Styled.div`
        height: 58px;
        margin: 0px 0px 190px 0px;
        padding: 0px 15px;
        border-radius: 4px;
        background-color: #f6f7f8;
        display:flex;
        align-items:center;
        justify-content: center;
    `;
    const PaginationNumber = Styled.h5`
        font-size: 18px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        text-align: center;
        color: #22262a;
    `;
    const PaginationNumberActive = Styled.h5`
        font-size: 18px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        text-align: center;
        color: white;
    `;
    const PaginationNumberWrapperActive = Styled.div`
        width: 56px;
        height: 56px;
        background-color: #22262a;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    const PaginationNumberWrapper = Styled.div`
        width: 56px;
        height: 56px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
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
        select{
            border: none;
            background: transparent;
            width: 70px;
        }
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
                <SpaceDIV>
                  <FaGripHorizontal
                    onClick={handleColumnDisplayStyle}
                    color={column.active ? "#2678BF" : "#C9CFD5"}
                    size="23px"
                  />
                </SpaceDIV>
                <SpaceDIV>
                  <FaBars
                    onClick={handleGridDisplayStyle}
                    color={grid.active ? "#2678BF" : "#C9CFD5"}
                    size="23px"
                  />
                </SpaceDIV>
              </ProductFilterWrapperSub>
            </ProductFilterWrapper>

            <ProductsSale>
              {bouncerProducts.map(product => (
                <CardWrapper
                  stock={product}
                  flex_direction={column.active ? "column" : "row"}
                  key={product.id}
                ></CardWrapper>
              ))}
            </ProductsSale>

            <PaginationWrapper>
              <PaginationNumberWrapper>
                <PaginationNumber>1</PaginationNumber>
              </PaginationNumberWrapper>

              <PaginationNumberWrapper>
                <PaginationNumber>2</PaginationNumber>
              </PaginationNumberWrapper>

              <PaginationNumberWrapperActive>
                <PaginationNumberActive>3</PaginationNumberActive>
              </PaginationNumberWrapperActive>

              <PaginationNumberWrapper>
                <PaginationNumber>4</PaginationNumber>
              </PaginationNumberWrapper>
            </PaginationWrapper>
          </MainContentWrapper>
        </ProductMainContainer>
        <Footer />
      </div>
    );
}

export default Product;
