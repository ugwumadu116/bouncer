import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../components/theme";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Breadcrumb from "../../components/breadcrumb";
import { Link } from "./style";
import SectionWapper from "./style";
import Layout from "../../components/product-layout";
import Accesories from "../../components/accesories";
import Brand from "../../components/brand";
import Prices from "../../components/prices";
import ColorDiv from "../../components/productColor";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  connectHits,
} from "react-instantsearch-dom";
const ALGOLIA_ID = process.env.REACT_APP_ALGOLIA_ID
const ALGOLIA_ADMIN_API_KEY = process.env.REACT_APP_ALGOLIA_ADMIN_API_KEY
const searchClient = algoliasearch(
  ALGOLIA_ID,
  ALGOLIA_ADMIN_API_KEY
);

const Hits = ({hits})=>(
  <Layout items={hits}/>  
)

const ProductsGrid = () => {
  return (
    <ThemeProvider theme={theme}>
      <InstantSearch searchClient={searchClient} indexName="products">
        <div>
          <Header secondaryLight xSmall />
          <Navbar />
          <Breadcrumb secondaryLighter>
            <Link xSmall bold primaryLightColor as="a" href="#">
              Home
            </Link>
            <Link xSmall bold secondaryDarkColor as="a" href="#">
              /
            </Link>
            <Link xSmall bold primaryLightColor as="a" href="#">
              Accesories
            </Link>
            <Link xSmall bold secondaryDarkColor as="a" href="#">
              /
            </Link>
            <Link xSmall bold as="a" href="#">
              Beat Solo2 on Ear Headphones - Black
            </Link>
          </Breadcrumb>
          <SectionWapper>
            <div className="containerx">
              <div className="side-sect">
                <div className="filter-category">
                  <Accesories />
                </div>
                <div className="filter-category">
                  <Prices />
                </div>
                <div className="filter-category">
                  <ColorDiv />
                </div>
                <div className="filter-category">
                  <Brand />
                </div>
              </div>
              <div className="main-sect">
                <div className="banner">
                  <img src="https://res.cloudinary.com/decagonbouncer/image/upload/v1578926954/banner_oczls9.webp" />
                  <div className="shop_now"></div>
                </div>

                <div className="layout-container">
                  <CustomHits/>
                </div>
              </div>
            </div>
          </SectionWapper>
          <div className="mt-17">
            <Footer />
          </div>
        </div>
      </InstantSearch>
    </ThemeProvider>
  );
};
const CustomHits = connectHits(Hits)
export default ProductsGrid;
