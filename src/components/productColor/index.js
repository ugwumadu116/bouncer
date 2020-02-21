import React from "react";
import Wrapper from "./style";
import { ThemeProvider } from "styled-components";
import theme from "../../components/theme";
import Text from "../../components/text"
import {CircleColor} from "./style"


const ColorDiv = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper secondaryLighter>
      <Text small bold secondaryDarkerColor>
          COLOR
        </Text>
        <div className="color-container">
            <CircleColor primaryLight/>
            <CircleColor primaryLight/>
            <CircleColor primaryLight/>
            <CircleColor primaryLight/>
            <CircleColor primaryLight/>
        </div>

      </Wrapper>
    </ThemeProvider>
  );
};

export default ColorDiv;
