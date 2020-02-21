import React from "react";
import FeaturedProductThumbNail from "../thumbnails/FeaturedProduct";
import Text from "../text";

const Featured = ({ featureProduct }) => {
  return (
    <div>
      <div className="text-align">
        <Text bold ltSpacing0 ht1 large>
          FEATURED PRODUCTS
        </Text>
      </div>
      <ul className=" p-1 d-flex-space-between flex-wrap">
        {featureProduct.map(item => (
          <li key={item.id}>
            <FeaturedProductThumbNail stock={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

Featured.defaultProps = {
  featureProduct: [
    {
      id: 1,
      name: "Beats Solo 2 On Ear Headphones - Black",
      type: "Mac",
      ratings: 5,
      reviews: 9,
      description:
        "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor",
      price: "499",
      trending: true,
      discountedPrice: "599",
      photo:
        "https://res.cloudinary.com/decagonbouncer/image/upload/v1575976800/bouncer-frontend/headset_xfmz7l.png"
    },
    {
      id: 2,
      name: "H-Squared tvTray",
      type: "Mac",
      ratings: 5,
      reviews: 9,
      description:
        "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor",
      price: "499",
      trending: true,
      discountedPrice: "599",
      photo:
        "https://res.cloudinary.com/decagonbouncer/image/upload/v1575976812/bouncer-frontend/tv_tray_c0ht3d.png"
    },
    {
      id: 3,
      name: "Netatmo Rain Gauge",
      type: "Mac",
      ratings: 5,
      reviews: 9,
      description:
        "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor",
      price: "499",
      trending: true,
      discountedPrice: "599",
      photo:
        "https://res.cloudinary.com/decagonbouncer/image/upload/v1575976806/bouncer-frontend/item3_sjz14g.png"
    }
  ]
};

export default Featured;
