import React from 'react';
import {render,cleanup} from '@testing-library/react'
import Footer from '../'
import { ThemeProvider } from "styled-components";
import theme from '../../theme'
afterEach(cleanup)

it("Footer contains children", ()=>{
    const {getByTestId} = render(
    <ThemeProvider theme={theme}>
       <Footer/> 
    </ThemeProvider>
    )
    const footerContent = getByTestId('footerId')
    expect(footerContent.children.length).toBe(4)
})