import React from "react";
import { action } from '@storybook/addon-actions';
import Pagination from '../src/components/paginate'
import { ThemeProvider } from "styled-components";
import theme from '../src/components/theme'


export default {
    component: Pagination,
    title: 'Pagination'
}

export const paginate = () => (
    <ThemeProvider theme={theme}>
        <Pagination onClick= {action('clicked')}/> 
    </ThemeProvider>
)
