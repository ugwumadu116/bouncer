import React from 'react';
import NavOne from '../../components/common/Navbars';
import HeroOne from './HeroOne';
import ProductsInfo from './ProductsInfo';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
// import { SizeWrapper, ColorDiv, TypographyText, ButtonContainer } from '../../components/mockups';
// import { FormInput, CardWrapper } from '../../components/common';

const Home = () => {
    
    return (
      <div className="App">
        <NavOne />
        <HeroOne />
        <ProductsInfo />
      </div>
    );
}

export default Home;
