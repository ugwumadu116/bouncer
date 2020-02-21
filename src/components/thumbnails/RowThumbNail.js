import React, { useState } from "react";
import FaShoppingCart from "./ShoppingCart";
import FaHeart from "./Hart";
import FaStar from "./Star";
import lp from "./assets/lp.png";
import { CardWrapperDIV, HotWrapper,IconWrapper } from "./styles/RowThumbNailStyle";
import Text from "../text";

const RowThumbNail = ({ stock }) => {
  const [showIcons, setShowIcons] = useState("none");
  const [likeItem, setLikeItem] = useState(false);
  const [buyItem, setBuyItem] = useState(false);

  const handleShowIcons = () => {
    setShowIcons("flex");
  };
  const handleCloseIcons = () => {
    setShowIcons("none");
  };
  const handleLikeItem = () => {
    setLikeItem(!likeItem);
  };
  const handleBuyItem = () => {
    setBuyItem(!buyItem);
  };

  return (
    <div>
      <CardWrapperDIV show={showIcons}>
        <div>
          <HotWrapper dangerDark>{stock.trending && "Hot"}</HotWrapper>
          <div onMouseEnter={handleShowIcons} className="imageContainer">
            <img src={stock.photo} alt="laptop" />
          </div>
          <div onMouseLeave={handleCloseIcons} className="iconContainer">
            <div onMouseLeave={handleCloseIcons} className="iconContainer">
              <IconWrapper
                onClick={handleBuyItem}
                {...(buyItem ? { primary: true } : {})}
              >
                <FaShoppingCart color={buyItem && "white"} />
              </IconWrapper>
              <IconWrapper
                onClick={handleLikeItem}
                {...(likeItem ? { primary: true } : {})}
                className="ml-2"
              >
                <FaHeart color={likeItem && "white"}></FaHeart>
              </IconWrapper>
            </div>
          </div>
        </div>

        <div className="footer">
          <div style={{ width: "10.125rem" }}>
            <Text bold ltSpacing0 ht1 xSmall className="product_name">
              {stock.name}
            </Text>
          </div>
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
          <div className="d-flex justify-content-start">
            <Text
              ltSpacing0
              className="mr-3"
              dangerDarkColor
              as="span"
              ht0
              small
            >
              ${stock.price}
            </Text>
            <Text
              className="old_price"
              ltSpacing0
              secondaryDarkColor
              as="span"
              ht0
              small
            >
              ${stock.discountedPrice}
            </Text>
          </div>
        </div>
      </CardWrapperDIV>
    </div>
  );
};

RowThumbNail.defaultProps = {
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

export default RowThumbNail;
