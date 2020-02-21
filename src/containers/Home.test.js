import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import App from "./Home";
import theme from "../components/theme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

