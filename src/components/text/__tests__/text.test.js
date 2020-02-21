import React from 'react'
import renderer from 'react-test-renderer'
import {ThemeProvider} from 'styled-components'
import Text from "../"
import theme from '../../theme'


it('renders correctly where only font size is set', ()=>{
    const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <Text small >hello</Text>  
    </ThemeProvider>
    
    ).toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders correctly where letter spacing is set',()=>{
   
    const tree = renderer.create(
    <ThemeProvider theme={theme}>
    <Text ltSpacing1>Hello</Text>
    </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot()
})

it('renders correctly where font weight is set',()=>{
   
    const tree = renderer.create(
    <ThemeProvider theme={theme}>
    <Text bold>Hello</Text>
    </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot()
})

it('renders correctly where fline height is set',()=>{
   
    const tree = renderer.create(
    <ThemeProvider theme={theme}>
    <Text ht5>Hello</Text>
    </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot()
})



