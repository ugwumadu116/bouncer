import React from "react";
import InputButton from "../src/components/form/inputButton/index";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";

export const inputbutton = () => (
  <ThemeProvider theme={theme}>
    <label>
    <InputButton placeholder='Voucher code' small/>
    </label>
    <br />
    <label>
    <InputButton placeholder='Voucher code'/>
    </label>
  </ThemeProvider>
);

export default {
  title: "InputButton",
  decorators: [withKnobs]
};
