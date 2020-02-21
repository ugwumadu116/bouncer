import React, { useState } from "react";
import { CardWrapper, HotWrapper } from "./styles/inLineThumbNailStyle";
import FaHeart from "./Hart";
import FaShoppingCart from "./ShoppingCart";

import FaStar from "./Star";
import lp from "./assets/lp.png";
import Button from "../button";
import Text, { Links } from "../text";


const InlineThumbNail = ({ stock }) => {
   const [likeItem, setLikeItem] = useState(false);
  const [buyItem, setBuyItem] = useState(false);
  
 
   const handleLikeItem = () => {
     setLikeItem(!likeItem);
   };
  const handleBuyItem = () => {
     setBuyItem(!buyItem);
   };


  
  return (
    <CardWrapper>
      <div className="imageWrapper">
        <HotWrapper dangerDark>{stock.trending && "Hot"}</HotWrapper>
        <div className="imageContainer">
          <img className="imgTest" src={stock.photo} alt="some img" />
        </div>
      </div>
      <div className="textContainer">
        <Text className="stockName">
          {stock.name}
        </Text>
        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-start">
            {Array(6)
              .fill("#c1c8ce")
              .fill("#ffc600", 0, stock.ratings)
              .map((item, i) => (
                <div key={i} className="mr-1">
                  <FaStar color={item} />
                </div>
              ))}
          </div>

          <Text secondaryDarkColor xSmall className="mr-2 ml-2">
            {stock.reviews > 1
              ? stock.reviews + " reviews"
              : stock.reviews + " review"}
          </Text>

          <Links to="product" xSmall bold primaryColor as="a" href="#">
            Submit a review
          </Links>
        </div>
        <hr />
        <div className="d-flex justify-content-start">
          <Text
            ltSpacing0
            className="mt-1 mb-1 mr-3"
            dangerDarkColor
            as="span"
            ht0
            small
          >
            ${stock.price}
          </Text>
          <Text
            className="mt-1 mb-1 old_price"
            ltSpacing0
            secondaryDarkColor
            as="span"
            ht0
            small
          >
            ${stock.discountedPrice}
          </Text>
        </div>
        <Text xSmall secondaryDarkerColor>
          {stock.description}
        </Text>
        <div className="d-flex flex-wrap">
          <Button
            {...(buyItem ? { btnprimary: true } : { btnInversePrimary: true })}
            btnInverseDanger
            btnSmall
            className="m1"
            onClick={handleBuyItem}
          >
            <div className="mr-2 ml-3 d-flex">
              <FaShoppingCart color="inherit" size="14px" />
            </div>
            {(buyItem && "Remove Item") || "Add To Cart"}
          </Button>
          <div className="m1">
            <Button
              {...(likeItem
                ? { btnprimary: true }
                : { btnInversePrimary: true })}
              onClick={handleLikeItem}
              btnSmall
            >
              <FaHeart color="inherit" size="14px" />
            </Button>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};



InlineThumbNail.defaultProps = {
  stock: {
    trending: false,
    id: 1,
    ratings: 5,
    name: "Apple Macbook Pro",
    description:
      "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor",
    price: "499",
    reviews: 3,
    discountedPrice: "599",
    photo: lp

  }
};

export default InlineThumbNail;

