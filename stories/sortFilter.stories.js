import React from "react";
import SortFilter from '../src/components/sort-filter'
import { ThemeProvider } from "styled-components";
import theme from '../src/components/theme'
import { withKnobs,number } from "@storybook/addon-knobs";

export default {
    title: 'SortFilter',
    decorators: [withKnobs]
}

export const SortFilters = () => (
    <ThemeProvider theme={theme}>
        <SortFilter items={number("items")}  /> 
    </ThemeProvider>
)
