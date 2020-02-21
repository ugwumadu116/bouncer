import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import '../src/styles/utils.css'
import '../src/styles/index.css'
import Navbar from "../src/components/navbar";
export const navbar = () => (
    <ThemeProvider theme={theme}>
      <Navbar/>
    </ThemeProvider>
  );

export default {
    title: "Navbar",
    decorators: [withKnobs]
  };
  