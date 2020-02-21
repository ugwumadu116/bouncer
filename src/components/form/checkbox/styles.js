import Styled from 'styled-components';

export const CheckboxContainer = Styled.div`
  display: inline-block;
  height:18px;
  width:18px;
  position:relative; 
`

export const Icon = Styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 4px;
`

export const Span = Styled.span`
 display: inline-flex;
 flex-direction: row-reverse;
 align-items: center;

`
export const Label = Styled.label`
 display: inline-block;
 color: ${({ theme, color }) =>  theme.colors[color] };
 margin-left: 15px;
 font-size: 20px;
`


export const HiddenCheckbox = Styled.input.attrs({ type: 'checkbox' })`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
height: 100%;
width: 100%;
z-index: 1;
opacity: 0;
  
`

export const StyledCheckbox = Styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${({theme,color,checked}) => (checked ? theme.colors[color] : 'white')};
  border-radius: 3px;
  transition: all 150ms;
  border: ${({theme,color,checked}) =>checked? "none":`2px solid ${theme.colors[color]}` };
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`