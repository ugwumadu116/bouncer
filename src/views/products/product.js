import React from 'react';
import NavOne from '../../components/common/Navbars';
import Footer from '../../components/common/Footer';
import Styled from "styled-components";
import { TypographyText } from '../../components/mockups';
import Home2 from '../homepage/home2';
import SideBar from '../../components/common/SideBar';


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

        <SideBar />

        <Home2 />

        <Footer />
      </div>
    );
}

export default Product;
