export const size = ({ theme, ...props }) => {
  const fonts = Object.keys(theme.btnSizes);
  const size = Object.keys(props).filter(size => fonts.includes(size));
  const k = theme.btnSizes[size[0]] || {};
  return `
  height:${k.height || "46px"}
  padding:${k.padding || "0 28px"}
  `;
};

export const btnColor = ({ theme, ...props }) => {
  const colorSet = Object.keys(theme.colors);

  let color = Object.keys(props).filter(color => {
    if (color.includes("btn")) {
      const suffix = color.split("btn")[1];
      return colorSet.includes(suffix);
    } else {
      return false;
    }
  });
  color = color[0] ? color[0].split("btn")[1] : "defaultColor";
  return `
    background-color: ${theme.colors[color]}
    color: white 
    &:hover {
      background-color: ${theme.colors[color + "Darker"]}
    }
  `;
};

export const btnState = ({ theme, ...props }) => {
  const items = Object.keys(props);
  let states = items.map(color => {
    if (color.includes("Transparent")) {
      return [color.split("Transparent")[1], "Transparent"];
    } else if (color.includes("Inverse")) {
      return [color.split("Inverse")[1], "Inverse"];
    } else {
      return false;
    }
  });

  const newState = states.filter(state => {
    return state !== false || state !== undefined;
  });

  let color = newState[0][0] ? newState[0][0].toLowerCase() : "none";
  let btnsTate = newState[0][1];
  if (newState[0][1] === "Transparent") {
    return `
    background: ${theme.btnState[btnsTate].background || "none"}
    color: ${theme.colors[color]}
    border: 1px solid ${theme.colors[color]}
    &:hover {
      background-color: ${theme.colors[color + "Darker"]}
      color:white
    }
  `;
  } else {
    return `
    background: ${theme.colors[color + "Inverse"]}
    color:  ${theme.colors[color]}
    &:hover {
      background-color: ${theme.colors[color + "Darker"]}
      color:white
    }
  `;
  }
};
