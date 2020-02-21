import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import Banner from "../src/components/banner";

export const adBanner = () => (
  <ThemeProvider theme={theme}>
    <br />
    <br />
    <br />
    <Banner />
  </ThemeProvider>
);

export default {
  title: "Banner"
};
