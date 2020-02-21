import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import CheckBox from "../src/components/form/checkbox";

export const Example = () => {
  const [checked, setChecked] = useState(false);
  const handleClick = (e) => {
    setChecked(!checked);
  };
  return (
    <ThemeProvider theme={theme}>
      <CheckBox
        color="success"
        label="Don't show this popup again"
        checked={checked}
        handleClick={handleClick}
      />
    </ThemeProvider>
  );
};



export default {
  title: "Checkbox",
  decorators: [withKnobs]
};
