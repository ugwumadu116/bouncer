const inputButtonHeight = ({ theme, ...props }) => {
  const heightSet = Object.keys(theme.inputbuttonSize);
  const height = Object.keys(props).filter(height =>
    heightSet.includes(height)
  );
  return `
        height:${theme.inputbuttonSize[height[0]] || '60px'}
        
    `;
};

export default inputButtonHeight;
