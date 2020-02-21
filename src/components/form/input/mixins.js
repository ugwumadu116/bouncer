const inputHeight = ({ theme, ...props }) => {
  const heightSet = Object.keys(theme.inputsizes);
  const height = Object.keys(props).filter(height =>
    heightSet.includes(height)
  );
  return `
      height:${theme.inputsizes[height[0]] || theme.inputsizes.small}
      width:${theme.inputsizes[height[0]] || theme.inputsizes.small}
  `;
};

export default inputHeight;
