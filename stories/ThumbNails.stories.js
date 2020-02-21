import React from "react";
import { withKnobs, boolean,number,text } from "@storybook/addon-knobs";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import {
  BlockThumbNail,
  InlineThumbNail,
  RowThumbNail,
  FeaturedProduct
} from "../src/components/thumbnails";


export const blockThumbNail = () => {
     const store = {
       id: number("id"),
       ratings: number("ratings"),
       name: text("name"),
       description: text("description"),
       price: text("price"),
       reviews: number("reviews"),
       discountedPrice: text("discounted price"),
       photo: text("photo url"),
       trending: boolean("Trending")
     };
    return (
      <ThemeProvider theme={theme}>
        <BlockThumbNail stock={store} />
      </ThemeProvider>
    );
}

export const rowThumbNail = () => {
    const store = {
      id: number("id"),
      ratings: number("ratings"),
      name: text("name"),
      description: text("description"),
      price: text("price"),
      reviews: number("reviews"),
      discountedPrice: text("discounted price"),
      photo: text("photo url"),
      trending: boolean("Trending")
    };
    return (
      <ThemeProvider theme={theme}>
        <RowThumbNail stock={store} />
      </ThemeProvider>
    );}

export const inlineThumbNail = () => {
    const store = {
      id: number("id"),
      ratings: number("ratings"),
      name: text("name"),
      description: text("description"),
      price: text("price"),
      reviews: number("reviews"),
      discountedPrice: text("discounted price"),
      photo: text("photo url"),
      trending: boolean("Trending")
    };
    return(
    
    <ThemeProvider theme={theme}>
        <BrowserRouter>
           <InlineThumbNail  stock={store} />
        </BrowserRouter>
         </ThemeProvider>
  )
};
       
export const featuredProductThumbNail = () => {
         const store = {
           id: number("id"),
           ratings: number("ratings"),
           name: text("name"),
           description: text("description"),
           price: text("price"),
           reviews: number("reviews"),
           discountedPrice: text("discounted price"),
           photo: text("photo url"),
           trending: boolean("Trending")
         };
         return (
           <ThemeProvider theme={theme}>
             <BrowserRouter>
               <FeaturedProduct stock={store} />
             </BrowserRouter>
           </ThemeProvider>
         );
       };


export default {
  title: "Thumbnails",
  decorators: [withKnobs]
};

