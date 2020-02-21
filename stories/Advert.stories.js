import React from "react";
import { ThemeProvider } from "styled-components";
import { withKnobs } from "@storybook/addon-knobs";
import theme from "../src/components/theme";
import Advert from "../src/components/advert";


export const advert = () => (
    <ThemeProvider theme={theme}>
        <Advert />
    </ThemeProvider>
);

export default {
    title: "Advert",
    decorators: [withKnobs]
  };
  