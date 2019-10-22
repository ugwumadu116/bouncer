import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const TypographyText = ({ line_height, color, letter_spacing, position, font_size, font_weight, children }) => {
    const Typography = Styled.div`
  font-size: ${font_size};
  font-weight: ${font_weight};
  font-stretch: normal;
  font-style: normal;
  line-height: ${line_height};
  letter-spacing: ${letter_spacing};
  text-align: ${position};
  color: ${color || "#22262a"};
`;
    return (<Typography>
        {children}
    </Typography>);
}

TypographyText.propTypes = {
    line_height: PropTypes.string.isRequired,
    letter_spacing: PropTypes.string,
    font_size: PropTypes.string,
    font_weight: PropTypes.string,
}


export default TypographyText;

