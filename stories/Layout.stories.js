import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import '../src/styles/utils.css'
import '../src/styles/index.css'
import Layout from '../src/components/product-layout'
export const navbar = () => (
    <ThemeProvider theme={theme}>
        <Layout/>
    </ThemeProvider>
  );

export default {
    title: "Layout",
    decorators: [withKnobs]
  };
  