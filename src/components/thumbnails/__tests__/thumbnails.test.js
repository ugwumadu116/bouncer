import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import {
  InlineThumbNail,
  BlockThumbNail,
  RowThumbNail,
  FeaturedProduct
} from "../";
import theme from "../../theme";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <InlineThumbNail />
        <BlockThumbNail />
        <RowThumbNail />
        <FeaturedProduct />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
