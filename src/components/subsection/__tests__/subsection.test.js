import React from 'react'
import renderer from 'react-test-renderer'
import {ThemeProvider} from 'styled-components'

import theme from '../../../components/theme'
import Subsection from '../index'



it('renders correctly', ()=>{
    const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <Subsection/>  
    </ThemeProvider>
    
    
    ).toJSON();
    expect(tree).toMatchSnapshot();
})