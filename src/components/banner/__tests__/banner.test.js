import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import Banner from "..";

it("renders correctly when called ", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Banner/>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
