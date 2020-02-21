export const fontSize = ({ theme, ...props }) => {
    const fontsizes = Object.keys(theme.fontsize);
    const size = Object.keys(props).filter(size => fontsizes.includes(size));
    return `
      font-size:${theme.fontsize[size[0]] || theme.fontsize.defaultFontsize}
  `;
  };


export const fontWeight = ({ theme, ...props }) => {
    const fontweights = Object.keys(theme.fontweight);
    const thickness= Object.keys(props).filter(thickness => fontweights.includes(thickness));
    return `
      font-weight:${theme.fontweight[thickness[0]] || theme.fontweight.defaultFontweight}
  `;
  };

  
export const lineHeight = ({ theme, ...props }) => {
    const lineheights = Object.keys(theme.lineheight);
    const lheight= Object.keys(props).filter(lheight => lineheights.includes(lheight));
    return `
      line-height:${theme.lineheight[lheight[0]] || theme.lineheight.defaultLineheight}
  `;
  };


export const letterSpacing = ({ theme, ...props }) => {
    const letterspacings = Object.keys(theme.letterspacing);
    const lspacing= Object.keys(props).filter(lspacing => letterspacings.includes(lspacing));
    return `
      letter-spacing:${theme.letterspacing[lspacing[0]] || theme.letterspacing.defaultLetterspacing}
  `;
  };
