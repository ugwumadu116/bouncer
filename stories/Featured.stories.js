import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import Featured from "../src/components/featured";

export const featuredProducts = () => {
  return (
      <ThemeProvider theme={theme}>
          <Featured />
    </ThemeProvider>
  );
};

export default {
  title: "Featuredproducts",
  decorators: [withKnobs]
};
