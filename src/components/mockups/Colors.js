import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const ColorDiv = ({color}) => {
const CircleColor = Styled.div`
  width: 33.6px;
  height: 33.6px;
  border-radius: 999px;
  background-color: ${color};
`;
    return (<CircleColor></CircleColor> );
}
 
ColorDiv.propTypes = {
  color: PropTypes.string,
}

export default ColorDiv;

