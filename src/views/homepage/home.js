import React from 'react';
import NavOne from '../../components/common/Navbars';
import HeroOne from './HeroOne';
import ProductsInfo from './ProductsInfo';
import BestSale from './BestSale';
import HeroTwo from './HeroTwo';
import Services from './Services';
import LatestNews from './Latest';
import FeatureProducts from './Features';
import SearchProducts from './Search';
import Footer from '../../components/common/Footer';

const Home = () => {
  
    
    return (
      <div className="App">
        <NavOne />
        <HeroOne />
        <ProductsInfo />
        <BestSale />
        <HeroTwo />
        <Services />
        <LatestNews />
        <FeatureProducts />
        <SearchProducts />
        <Footer />
      </div>
    );
}

export default Home;
