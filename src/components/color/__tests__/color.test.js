import React from 'react'
import renderer from 'react-test-renderer'
import {ThemeProvider} from 'styled-components'
import Color from '../index'
import theme from '../../theme'
it('renders correctly where there is no background', ()=>{
    const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <Color/>  
    </ThemeProvider>
    
    
    ).toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders correctly where background is set',()=>{
   
    const tree = renderer.create(
    <ThemeProvider theme={theme}>
    <Color label="primary" primary/>
    </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot()
})