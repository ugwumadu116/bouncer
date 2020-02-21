import React from "react";
import { render } from "@testing-library/react";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";
import GoPro from "..";
import '@testing-library/jest-dom/extend-expect'

test("test to match snapshot", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <GoPro />
      </ThemeProvider>
    );
    const gopro = getByTestId('gopro')
    expect(gopro).toMatchSnapshot()
});
  
