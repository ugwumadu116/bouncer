import React from 'react'
import renderer from 'react-test-renderer'
import {ThemeProvider} from 'styled-components'
import InputGroup from '../index'
import theme from '../../../theme'

it('renders correctly', () => {
   
    const tree = renderer.create(
    <ThemeProvider theme={theme}>
    <InputGroup label="password" type='password' large/>
    </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot()
})