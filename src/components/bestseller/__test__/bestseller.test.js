import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import BestSellers from "../";
import theme from "../../theme";

it("renders correctly when breadcrumb component is called", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <BestSellers></BestSellers>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
