import React from "react";
import Wrapper from "./style";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Text from "../text";

const Prices = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Text small bold secondaryDarkerColor>
          PRICES
        </Text>
        <div className="price-range">
            <Text xSmall bold secondaryDarkerColor>
            Ranger:
            </Text>
            <Text xSmall bold secondaryDarkerColor>
            $13.99 - $25.99
            </Text>
        </div>
        
      </Wrapper>
    </ThemeProvider>
  );
};

export default Prices;
