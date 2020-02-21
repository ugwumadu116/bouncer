import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import Counter from "../src/components/form/counter";

export const Count = () => {
  const [counter, setCounter] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Counter counter={counter} setCounter={setCounter} />
    </ThemeProvider>
  );
};
export default {
  title: "Counter",
  decorators: [withKnobs]
};
