import React from "react";
import Header from '../src/components/header'
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import '../src/styles/utils.css'
import '../src/styles/index.css'
export const header = () => (
    <ThemeProvider theme={theme}>
      <Header secondaryLight xSmall/>
    </ThemeProvider>
  );

export default {
    title: "Header",
    decorators: [withKnobs]
  };
  