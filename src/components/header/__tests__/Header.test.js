import React from 'react';
import {render,cleanup} from '@testing-library/react'
import Header from '../'
import { ThemeProvider } from "styled-components";
import theme from '../../theme'
afterEach(cleanup)

it("Footer contains children", ()=>{
    const {getByTestId} = render(
    <ThemeProvider theme={theme}>
       <Header/> 
    </ThemeProvider>
    )
    const headerContent = getByTestId('headerId')
    expect(headerContent.children.length).toBe(1)
})