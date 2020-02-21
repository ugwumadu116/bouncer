import React from 'react'
import renderer from 'react-test-renderer'
import {ThemeProvider} from 'styled-components'
import CheckGroup from '../index'
import theme from '../../../theme'
import { render } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'



it('renders correctly', ()=>{
    const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <CheckGroup/>  
    </ThemeProvider>
    
    
    ).toJSON();
    expect(tree).toMatchSnapshot();
})


describe('Checkbox', () => {
  it('find label', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CheckGroup checked={true} handleClick={()=>{}}/>
      </ThemeProvider>
    
    );
    const elem = getByTestId('box');
    expect(elem).toHaveProperty('checked', true)
  })
})