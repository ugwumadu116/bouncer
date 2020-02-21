import React from "react";
import AdvertWrapper from "./style";

const Advert = ({ products }) => {
  return (
    <AdvertWrapper>
      <div className="mex">
        {products.map((items, i) => (
          <div className="advert" key={i}>
            <img src={items.productUrl} alt="product advert" />
          </div>
        ))}
      </div>
    </AdvertWrapper>
  );
};

export default Advert;

Advert.defaultProps = {
  products: [
    {
      productUrl:
        "https://res.cloudinary.com/decagonbouncer/image/upload/v1575986836/bouncer-frontend/iphone_ad"
    },
    {
      productUrl:
        "https://res.cloudinary.com/decagonbouncer/image/upload/v1575986849/bouncer-frontend/oculus_rift_ad_nrpsc2.png"
    },
    {
      productUrl:
        "https://res.cloudinary.com/decagonbouncer/image/upload/v1575986827/bouncer-frontend/go_pro_ad_fumlul.png"
    }
  ]
};
