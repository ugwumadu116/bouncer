import React from "react";
import Wrapper from "./style";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Text from "../text";


const Accesories = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Text small bold secondaryDarkerColor>
          ACCESORIES
        </Text>
        <div className="search-list">
          <div className="search-item">
            <Text xSmall bold secondaryDarkerColor>
              Apple Car
            </Text>
            <Text xSmall bold secondaryDarkerColor>
              3
            </Text>
          </div>
          <div className="search-item">
            <Text xSmall bold secondaryDarkerColor>
              Air port & wireless
            </Text>
            <Text xSmall bold secondaryDarkerColor>
              48
            </Text>
          </div>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Accesories;
