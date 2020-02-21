import React from "react";
import Input from "../src/components/form/input"
import { withKnobs,boolean,text } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";

export const input = () => (
  <ThemeProvider theme={theme}>
    <Input name="firstname" label={text("small")} disabled={boolean(false)} small placeholder={text("email")}/>
    <Input name="firstname" medium label={text("medium")} disabled={boolean(false)} placeholder={text("email")}/>
    <Input name="firstname" large label={text("large")} disabled={boolean(false)} placeholder={text("email")}/>
  </ThemeProvider>
);

export default {
  title: "Form",
  decorators: [withKnobs]
};
