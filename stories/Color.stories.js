import React from "react";
import Color from "../src/components/color/index";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";

export const primary = () => (
  <ThemeProvider theme={theme}>
    <Color primaryLight label="primary-light" />
    <br />
    <Color primary label="primary" />
    <br />
    <Color primaryDark label="primary-dark" />
    <br />
    <Color label="primary-darker" primaryDarker secondaryColor />
  </ThemeProvider>
);
export const secondary = () => (
  <ThemeProvider theme={theme}>
    <Color secondaryLighter label="secondary-lighter" />
    <br />
    <Color secondaryLight label="secondary-light" />
    <br />
    <Color secondary label="secondary" />
    <br />
    <Color secondaryDark label="secondary-dark" />
    <br />
    <Color secondaryDarker label="secondary-darker" secondaryColor />
    <br />
  </ThemeProvider>
);
export const warning = () => (
  <ThemeProvider theme={theme}>
    <Color warning label="warning" />
    <br />
    <Color warningDark label="warning-dark" />
    <br />
    <Color warningDarker label="warning-darker" />
    <br />
  </ThemeProvider>
);
export const danger = () => (
  <ThemeProvider theme={theme}>
    <Color danger label="danger" />
    <br />
    <Color dangerDark label="danger-dark" />
    <br />
    <Color dangerDarker label="danger-darker" />
    <br />
  </ThemeProvider>
);
export const success = () => (
  <ThemeProvider theme={theme}>
    <Color success label="success" />
    <br />
    <Color successDark label="success-dark" />
    <br />
    <Color successDarker label="success-darker" />
  </ThemeProvider>
);

export default {
  title: "Color",
  decorators: [withKnobs]
};
