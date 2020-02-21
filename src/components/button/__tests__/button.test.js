import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import ButtonDom from "../index";

it("renders the default correctly when no props are passed", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ButtonDom />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly where btn size is set to Tiny", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ButtonDom btnTiny />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it("renders correctly where btn size is set to small", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ButtonDom btnSmall />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly where btn size is set to Large", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ButtonDom btnLarge />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly where inverse is set ", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ButtonDom btnInversePrimary />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly where transparency is set", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ButtonDom btnTransparentPrimary btnSmall />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly where background is set primary", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ButtonDom btnprimary />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it("renders correctly where background is set Success", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ButtonDom btnsuccess />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it("renders correctly where background is set Warning", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ButtonDom btnwarning />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it("renders correctly where background is set Danger", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ButtonDom btndanger />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly where background is set Black", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ButtonDom btndark />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
