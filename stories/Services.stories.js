import React from "react";
import Services from "../src/components/services/index";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";

export const service = () => (
  <ThemeProvider theme={theme}>
   <Services />
  </ThemeProvider>
);

export default {
  title: "Services",
  decorators: [withKnobs]
};