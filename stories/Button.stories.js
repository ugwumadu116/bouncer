import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import Button from "../src/components/button";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export const buttonPrimary = () => (
  <ThemeProvider theme={theme}>
    <Button
      btnprimary
      btnSmall
      disabled={boolean(false)}
      onClick={({ target }) => action("button primary")(target)}
    >
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnTransparentPrimary btnSmall>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnInversePrimary btnSmall>
      Click
    </Button>
    <br />
    <br />
    <Button btnprimary btnLarge>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnTransparentPrimary btnLarge>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnInversePrimary btnLarge>
      Click
    </Button>
  </ThemeProvider>
);

export const buttonDanger = () => (
  <ThemeProvider theme={theme}>
    <Button btndanger btnSmall>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnTransparentDanger btnSmall>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnInverseDanger btnSmall>
      Click
    </Button>
    <br />
    <br />
    <Button btndanger btnLarge>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnTransparentDanger btnLarge>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnInverseDanger btnLarge>
      Click
    </Button>
  </ThemeProvider>
);

export const buttonSuccess = () => (
  <ThemeProvider theme={theme}>
    <Button btnsuccess btnSmall>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnTransparentSuccess btnSmall>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnInverseSuccess btnSmall>
      Click
    </Button>
    <br />
    <br />
    <Button btnsuccess btnLarge>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnTransparentSuccess btnLarge>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnInverseSuccess btnLarge>
      Click
    </Button>
  </ThemeProvider>
);

export const buttonWarning = () => (
  <ThemeProvider theme={theme}>
    <Button btnwarning btnSmall>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnTransparentWarning btnSmall>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnInverseWarning btnSmall>
      Click
    </Button>
    <br />
    <br />
    <Button btnwarning btnLarge>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnTransparentWarning btnLarge>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnInverseWarning btnLarge>
      Click
    </Button>
  </ThemeProvider>
);

export const buttonDark = () => (
  <ThemeProvider theme={theme}>
    <Button btndark btnSmall>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnTransparentDark btnSmall>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnInverseDark btnSmall>
      Click
    </Button>
    <br />
    <br />
    <Button btndark btnLarge>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnTransparentDark btnLarge>
      Click
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnInverseDark btnLarge>
      Click
    </Button>
  </ThemeProvider>
);

export const buttonIcons = () => (
  <ThemeProvider theme={theme}>
    <Button btnInversePrimary btnTiny>
      <FaRegHeart />
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnInversePrimary btnTiny>
      <FiShoppingCart />
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnInversePrimary btnLarge>
      <FiShoppingCart /> &nbsp; &nbsp; Add to Cart
    </Button>
    &nbsp; &nbsp; &nbsp;
    <Button btnInversePrimary btnLarge>
      <FaRegHeart /> &nbsp; &nbsp; Add to Favorites
    </Button>
  </ThemeProvider>
);

export default {
  title: "Button",
  decorators: [withKnobs]
};
