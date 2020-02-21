const select = ({ theme, ...props }) => {
    const selectSizes = Object.keys(theme.selectSize);
    const selectsize = Object.keys(props).filter(size => selectSizes.includes(size));
    const k = theme.selectSize[selectsize[0]] || {}
    
    return `
      height:${k.height || '38px'}
      width:${ k.width || '200px'}
 
  `;
  };

  export default select;
