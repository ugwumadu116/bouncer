import React from "react";

import FaStar from "./Star";
import {
  CardWrapperDIV
} from "./styles/FeatureProductStyle";
import Text from "../text";

const FeaturedProductThumbNail = ({ stock }) => {
  return (
    <div>
      <CardWrapperDIV>
        <div>
          <div className="imageContainer">
            <img src={stock.photo} alt="laptop" />
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
              xSmall
            >
              ${stock.price}
            </Text>
            <Text
              className="old_price"
              ltSpacing0
              secondaryDarkColor
              as="span"
              ht0
              xSmall
            >
              ${stock.discountedPrice}
            </Text>
          </div>
        </div>
      </CardWrapperDIV>
    </div>
  );
};

FeaturedProductThumbNail.defaultProps = {
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
    photo:
      "https://res.cloudinary.com/decagonbouncer/image/upload/v1575976812/bouncer-frontend/tv_tray_c0ht3d.png"
  }
};

export default FeaturedProductThumbNail;
