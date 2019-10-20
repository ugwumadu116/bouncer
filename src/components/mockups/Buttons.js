import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components'



const ButtonContainer = ({ color, opacity, size, width, background, children }) => {
    const ButtonDom = Styled.button`
  width: ${width || "150px"};
  height: 46px;
  border-radius: 4px;
  border: ${ background } solid 2px;
  background-color: ${background || "green"};
  font-size: ${size};
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: 0.4px;
  text-align: center;
  opacity: ${opacity || "normal"};
  color:  ${color || "#ff4252"};
`;
    return (<ButtonDom>
        {children}
    </ButtonDom>);
}

ButtonContainer.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string,
    opacity: PropTypes.string,
    width: PropTypes.string,
    background: PropTypes.string.isRequired,
}


export default ButtonContainer;

