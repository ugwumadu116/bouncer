import React from 'react'
import renderer from 'react-test-renderer'
import {ThemeProvider} from 'styled-components'
import InputButton from '../index'
import theme from '../../../theme'


it('renders correctly', ()=>{
    const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <InputButton/>  
    </ThemeProvider>
    
    
    ).toJSON();
    expect(tree).toMatchSnapshot();
})