import React from "react";
import { ThemeProvider } from "styled-components";
import { withKnobs } from "@storybook/addon-knobs";
import theme from "../src/components/theme";
import LandingPageCarousel from "../src/components/carousel";


export const carousel = () => (
    <ThemeProvider theme={theme}>
        <LandingPageCarousel />
    </ThemeProvider>
);

export default {
    title: "Carousel",
    decorators: [withKnobs]
  };
  