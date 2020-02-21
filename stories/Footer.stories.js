import React from "react";
import Footer from "../src/components/footer";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import '../src/styles/utils.css'
import '../src/styles/index.css'
export const footer = () =>(
    <ThemeProvider theme={theme}>
      <Footer/>  
    </ThemeProvider>
)

export default {
    title: "Footer",
    decorators: [withKnobs]
  };