import React from "react";
import { render } from "@testing-library/react";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";
import SortFilter from "..";
import '@testing-library/jest-dom/extend-expect'

test("test the state of the item", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SortFilter />
      </ThemeProvider>
    );
    const sortFilter = getByTestId('sort-filter')
    expect(sortFilter.children.length).toBe(2)
    expect(sortFilter).toMatchSnapshot()
});
  