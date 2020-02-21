import React from "react";
import { render, fireEvent } from "@testing-library/react";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";
import Pagination from "..";
import '@testing-library/jest-dom/extend-expect'


test('test background color of active state', () => {
    const { getByText } = render( 
    <ThemeProvider theme={theme}>
        <Pagination />
    </ThemeProvider>
    )
    const bg = getByText('1')
    expect(bg.style.backgroundColor).toBe('black')
    expect(bg.style.color).toBe('white')
    expect(bg.style.backgroundColor).toMatchSnapshot();
})
