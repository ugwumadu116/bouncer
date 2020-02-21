import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import {
  ProductsTypes,
  Products
} from "../src/components/bestseller/assets/data/products";

import BestSellers from "../src/components/bestseller";

export const bestSellers = () => {
         return (
           <ThemeProvider theme={theme}>
             <BestSellers ProductsTypes={ProductsTypes} Products={Products} />
           </ThemeProvider>
         );
       };



export default {
  title: "Bestseller",
  decorators: [withKnobs]
};
