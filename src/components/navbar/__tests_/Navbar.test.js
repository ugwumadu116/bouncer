import React from 'react';
import {render,cleanup} from '@testing-library/react'
import Navbar from '../'
import { ThemeProvider } from "styled-components";
import theme from '../../theme'
afterEach(cleanup)

it("Footer contains children", ()=>{
    const {getByTestId} = render(
    <ThemeProvider theme={theme}>
       <Navbar/> 
    </ThemeProvider>
    )
    const headerContent = getByTestId('navbarId')
    expect(headerContent.children.length).toBe(2)
})