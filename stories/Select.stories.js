import React from "react";
import Select from "../src/components/form/select/index";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";

export const select = () => (
  <ThemeProvider theme={theme}>
   <Select list={['boy', 'girl']} label='small-size' sm  shadowgrey/><br /> <br />
   <Select list={['boy', 'girl']} label='medium-size' lg shadowgrey/><br /> <br />
   <Select list={['boy', 'girl']} label='large-size' lg shadowgrey/> <br />
  </ThemeProvider>
);

export default {
  title: "Select",
  decorators: [withKnobs]
};