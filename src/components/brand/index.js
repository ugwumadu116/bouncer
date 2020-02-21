import React from "react";
import Wrapper from "./style";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Text from "../text";
import { connectRefinementList } from "react-instantsearch-dom";

const RefinementList = ({ items,currentRefinement, createURL, refine }) => (
  <div className="search-list">
    {items.map(item => (
      <div key={item.label} className="search-item">
        <a
          href={createURL(item.value)}
          onClick={event => {
            event.preventDefault();
            refine(item.value);
          }}
          className="w-100"
          style={{color: item.isRefined?"blue":null }}
        >
          <div className="d-flex justify-content-between w-100">
            <Text xSmall  secondaryDarkerColor style={{color: item.isRefined?theme.colors.primaryDark:null }}>
            {item.label}
          </Text>
          <Text xSmall  secondaryDarkerColor style={{color: item.isRefined?theme.colors.primaryDark:null }}>
            ({item.count})
          </Text>
          </div>
          
        </a>
      </div>
    ))}
  </div>
);
const CustomRefinementList = connectRefinementList(RefinementList);
const Brand = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Text small bold secondaryDarkerColor>
          BRAND
        </Text>
        <CustomRefinementList attribute="brand"  />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Brand;
