import React from 'react';
import {render,cleanup} from '@testing-library/react'
import Layout from "../"
import { ThemeProvider } from "styled-components";
import theme from '../../theme'
afterEach(cleanup)

it("Product Layout contains children", ()=>{
    const {getByTestId} = render(
    <ThemeProvider theme={theme}>
       <Layout/> 
    </ThemeProvider>
    )
    const headerContent = getByTestId('productId')
    expect(headerContent.children.length).toBe(3)
})