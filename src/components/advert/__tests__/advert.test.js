import React from 'react'
import renderer from 'react-test-renderer'
import {ThemeProvider} from 'styled-components'
import theme from '../../theme'
import Advert from '../'


it('renders correctly', ()=>{
    const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <Advert/>  
    </ThemeProvider>
    
    ).toJSON();
    expect(tree).toMatchSnapshot();
})




