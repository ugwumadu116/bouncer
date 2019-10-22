import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';


const SizeWrapper = ({height, children}) => {
  const SizeWrapperDIV = styled.div`
  height: ${height};
  width: auto;
`;

  return (
    <SizeWrapperDIV>
      {children}
    </SizeWrapperDIV>
   );
}

SizeWrapper.propTypes = {
  height: PropTypes.string.isRequired,
}


export default SizeWrapper;
