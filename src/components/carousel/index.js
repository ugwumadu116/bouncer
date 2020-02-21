import React from "react";
import Slider from "react-slick";
import Wrapper from "./style";
import MaskGroup1 from "./assets/MaskGroup1.png";
import Text from "../text";


const LandingPageCarousel = ({products}) => {
  const settings = {
    infinite: true,
    speed: 300,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
      return (
    <Wrapper>
      <div className="carouselWrapper">
        <Slider className="" {...settings}>
          {products.map((items,i)=>(
            <div className="carouselItems" key={i}>
            <div className="textWrapper">
              <div className="itemInfo">
              <Text xlarge ht1 bold whiteColor>
                {items.productName}
              </Text>
              <Text xSmall ht4 whiteColor>
                {items.productSummary}
              </Text>
              <Text className="underLine" xSmall ht4 bold whiteColor>MORE</Text>
              </div>
            </div>
            <div className="imgWrapper">
            <img className="productImg" src={items.productImg} alt="MaskGroup1" />
            </div>
          </div>
          ))}
        </Slider>
      </div>
    </Wrapper>
  );
};


export default LandingPageCarousel;

LandingPageCarousel.defaultProps={
  products:[
    {productName:"iPhone X",
     productSummary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
     productImg:MaskGroup1,
  },
  {productName:"iPhone X",
     productSummary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
     productImg:MaskGroup1,
  },
  {productName:"iPhone X",
     productSummary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
     productImg:MaskGroup1,
  },
  ]
}