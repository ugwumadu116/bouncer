import React from 'react'
import renderer from 'react-test-renderer'
import {ThemeProvider} from 'styled-components'
import Services from '../index'
import theme from '../../../components/theme'



it('renders correctly', ()=>{
    const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <Services/>  
    </ThemeProvider>
    
    
    ).toJSON();
    expect(tree).toMatchSnapshot();
})