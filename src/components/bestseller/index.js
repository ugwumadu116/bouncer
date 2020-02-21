import React, { useState } from "react";
import InViewMonitor from "react-inview-monitor";
import Text from "../text";
import { BestSellerContainer } from "./styles";
import BlockThumbNail from "../thumbnails/BlockThumbNail";

const BestSellers = ({ ProductsTypes, Products }) => {
  const [bestSellerLink, setBestSellersLink] = useState(ProductsTypes);
  const [bestProducts, setBestProducts] = useState(Products);
  const [view, setView] = useState(8);

  const handleFilter = value => {
    const newProducts =
      value === "All" ? Products : Products.filter(item => item.type === value);
    setBestProducts(newProducts);

    const activeProduct = bestSellerLink.map(item => ({
      ...item,
      active: false
    }));
    activeProduct.find(item => item.name === value).active = true;
    setBestSellersLink(activeProduct);
  };
  const handleViews = () => {
    setView(view + 8);
  };
  return (
    <BestSellerContainer>
      <div className="d-flex-center">
        <Text bold ltSpacing0 ht1 large>
          BEST SELLER
        </Text>
      </div>
      <div>
        <ul className="d-flex-center">
          {bestSellerLink.map((item, i) => (
            <li
              onClick={() => handleFilter(item.name)}
              key={i}
              className={(item.active && "m5 active") || "m5"}
            >
              <Text bold ltSpacing0 xSmall>
                {item.name}
              </Text>
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex-center flex-column">
        <div className="d-flex-center-wrap">
          {bestProducts.length ? (
            [...bestProducts.slice(0, view)].map(item => (
              <div className="m3" key={item.id}>
                <InViewMonitor
                  classNameNotInView="vis-hidden"
                  classNameInView="animated fadeInUp"
                >
                  <BlockThumbNail stock={item} />
                </InViewMonitor>
              </div>
            ))
          ) : (
            <Text dangerColor bold ltSpacing0 large>
              Empty
            </Text>
          )}
        </div>
        {bestProducts.length > view && (
          <Text
            onClick={handleViews}
            className="active loadMore"
            primaryColor
            bold
            ltSpacing0
            xSmall
          >
            Load More..
          </Text>
        )}
      </div>
    </BestSellerContainer>
  );
};

BestSellers.defaultProps = {
  ProductsTypes: [
    {
      name: "All",
      active: true
    },
    {
      name: "Mac",
      active: false
    },
    {
      name: "iPhone",
      active: false
    },
    {
      name: "iPad",
      active: false
    },
    {
      name: "Accessories",
      active: false
    }
  ],
  Products: [
    {
      id: 1,
      name: "Apple Macbook Pro",
      type: "Mac",
      ratings: 5,
      reviews: 9,
      description:
        "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor",
      price: "499",
      trending: true,
      discountedPrice: "599",
      photo:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-silver-select-201807?wid=892&hei=820&&qlt=80&.v=1529520056377"
    }
  ]
};

export default BestSellers;
