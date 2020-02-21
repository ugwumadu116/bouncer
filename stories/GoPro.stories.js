import React from "react";
import GoPro from '../src/components/goPro'
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import '../src/styles/utils.css'
import '../src/styles/index.css'
export const gopro = () => (
    <ThemeProvider theme={theme}>
      <GoPro  />
    </ThemeProvider>
  );

export default {
    title: "GoPro",
    decorators: [withKnobs]
};
  