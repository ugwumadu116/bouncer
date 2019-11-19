import styled from 'styled-components';
import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';

import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";
import {ButtonContainer} from "../../components/mockups";
import lp from "../../assets/lp.png";
import { CartContext } from '../../context/CartContext';




const CardWrapper = ({ flex_direction, stock }) => {
  const { cart, addItemToCart } = useContext(CartContext);
  
  const [showLikeBtn, setShowLikeBtn] = useState("none");
  const [likeBtn, setLikeBtn] = useState({
    iconColor: "#33a0ff",
    likedBackground: false
  });
  const [cartBtn, setCartBtn] = useState({
    iconColor: "#33a0ff",
    cartIconBackground: false
  });
  

  const hoverHandler = () => {
    const stateChecker = showLikeBtn === "none" ? "flex" : "none";
    setShowLikeBtn(stateChecker);
  };
  const handleLike = () => {
    const checkLike = likeBtn.iconColor === "#33a0ff" ? "#ffffff" : "#33a0ff";
    setLikeBtn({
      iconColor: checkLike,
      likedBackground: !likeBtn.likedBackground
    });
  };
  const handleCart = (id) => {
    const setCart = {
      cartIconBackground: true,
      iconColor: "#ffffff"
    };
    setCartBtn(setCart);
    addItemToCart(id)
  };


  const CardWrapperDIV = styled.div`
    display: flex;
    flex-direction: ${flex_direction || "column"};
    width: 270px;
    justify-content: space-around;
    align-items: center;
    height: 349px;
    border-radius: 4px;
    margin-bottom: 30px;
    position: relative;
    border: solid 3px #f6f7f8;
  `;
  const FlexDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;
  const TextWrapperConatiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    hr {
      border: 2px solid #f6f7f8;
    }
  `;

  const ImageDIV = styled.div`
    width: 236px;
    height: 153px;
    display: ${showLikeBtn};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0.95;
    background-color: #fafafb;
    position: absolute;
    top: 60px;
  `;
  const ImageDIVWrapper = styled.div`
    width: 236px;
    height: 153px;
    img{
      width: 100%;
      height: 100%;
    }
  `;

  const OldPriceWarperDIV = styled.h5`
    margin-left: 20px;
  `;

  const CardWrapperDIVROW = styled.div`
    display: flex;
    flex-direction: row;
    width: 840px;
    margin-bottom: 20px;
  `;
  const SpanMargin = styled.span`
    margin: 0px 10px;
  `;
  const SubmitReview = styled.span`
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.35px;
    text-align: left;
    color: #33a0ff;
  `;
  const OverViewDIv = styled.div`
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.35px;
    text-align: left;
    color: #c1c8ce;
    margin: 0px 10px;
  `;
  const TextParagraph = styled.p`
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    text-align: left;
    color: #262626;
  `;
  const TextParagraphWrapper = styled.div`
    width: 570px;
  `;
  const TextHeaderWrapper = styled.h1`
    font-size: 24px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: normal;
    text-align: left;
    color: #22262a;
  `;
  const ImageWrapper = styled.div`
    width: 270px;
    height: 270px;
    margin-right: 30px;
    border-radius: 4px;
    border: solid 3px #f6f7f8;
  `;
  const HotWrapper = styled.div`
    width: 40px;
    height: 20px;
    text-align: center;
    color: white;
    border-radius: 2px;
    background-color: #ff4858;
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin-bottom: 32px;
  `;
  const NotHotWrapper = styled.div`
    width: 40px;
    height: 20px;
    text-align: center;
    color: white;
    border-radius: 2px;
    background-color: transparent;
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin-bottom: 32px;
  `;

  
  const MyCard =
    flex_direction === "row" ? (
      <CardWrapperDIVROW>
        <ImageWrapper>
          {stock.hot ? (
            <HotWrapper>Hot</HotWrapper>
          ) : (
            <NotHotWrapper></NotHotWrapper>
          )}
          <ImageDIVWrapper>
            <img
              onMouseEnter={hoverHandler}
              className="imgTest"
              src={stock.image}
              alt="some img"
            />
          </ImageDIVWrapper>
        </ImageWrapper>
        <TextWrapperConatiner>
          <div>
            <TextHeaderWrapper>{stock.name}</TextHeaderWrapper>
          </div>
          <FlexDiv>
            <h5 className="flex_div">
              <FaStar color="#ffc600" size="10.9px" />
              <FaStar color="#ffc600" size="10.9px" />
              <FaStar color="#ffc600" size="10.9px" />
              <FaStar color="#ffc600" size="10.9px" />
              <FaStar color="#ffc600" size="10.9px" />
              <FaStar color="#c1c8ce" size="10.9px" />
            </h5>

            <OverViewDIv>0 reviews</OverViewDIv>
            <SubmitReview>Submit a review</SubmitReview>
          </FlexDiv>
          <hr />
          <FlexDiv>
            <h5 className="product_price">{stock.price}</h5>
            <OldPriceWarperDIV className="product_old_price">
              {stock.oldPrice}
            </OldPriceWarperDIV>
          </FlexDiv>
          <TextParagraphWrapper>
            <TextParagraph>{stock.attribute}</TextParagraph>
          </TextParagraphWrapper>
          <div>
            <ButtonContainer
              color={cartBtn.cartIconBackground ? "#ffffff" : "#33a0ff"}
              size="14px"
              width="150px"
              background={
                cartBtn.cartIconBackground
                  ? "#33a0ff"
                  : "rgba(51, 160, 255, 0.1)"
              }
            >
              <SpanMargin onClick={() => handleCart(stock.id)}>
                <SpanMargin>
                  <FaShoppingCart size="14px" />
                </SpanMargin>
                Add To Cart
              </SpanMargin>
            </ButtonContainer>
            <SpanMargin>
              <ButtonContainer
                color={likeBtn.likedBackground ? "#ffffff" : "#33a0ff"}
                size="14px"
                width="46px"
                background={
                  likeBtn.likedBackground
                    ? "#33a0ff"
                    : "rgba(51, 160, 255, 0.1)"
                }
              >
                <div onClick={handleLike}>
                  <FaHeart size="14px" />
                </div>
              </ButtonContainer>
            </SpanMargin>
          </div>
        </TextWrapperConatiner>
      </CardWrapperDIVROW>
    ) : (
      <CardWrapperDIV>
        <div>
          {stock.hot ? (
            <HotWrapper>Hot</HotWrapper>
          ) : (
            <NotHotWrapper></NotHotWrapper>
          )}
          <ImageDIVWrapper>
            <img
              onMouseEnter={hoverHandler}
              className="imgTest"
              src={stock.image}
              alt="some img"
            />
          </ImageDIVWrapper>
          <ImageDIV onMouseLeave={hoverHandler} className="imageDIV">
            <div
              className={
                cartBtn.cartIconBackground
                  ? "addIndex addBackground"
                  : "addIndex"
              }
            >
              <FaShoppingCart
                onClick={() => handleCart(stock.id)}
                color={cartBtn.iconColor}
              ></FaShoppingCart>
            </div>
            <div
              className={
                likeBtn.likedBackground ? "addIndex addBackground" : "addIndex"
              }
            >
              <FaHeart onClick={handleLike} color={likeBtn.iconColor}></FaHeart>
            </div>
          </ImageDIV>
        </div>

        <div className="test">
          <h5 className="product_name">{stock.name}</h5>
          <h5 className="flex_div">
            <FaStar color="#ffc600" size="10.9px" />
            <FaStar color="#ffc600" size="10.9px" />
            <FaStar color="#ffc600" size="10.9px" />
            <FaStar color="#ffc600" size="10.9px" />
            <FaStar color="#ffc600" size="10.9px" />
            <FaStar color="#c1c8ce" size="10.9px" />
          </h5>
          <div className="flex_div">
            <h5 className="product_price">{stock.price}</h5>
            <h5 className="product_old_price">{stock.oldPrice}</h5>
          </div>
        </div>
      </CardWrapperDIV>
    );

  return MyCard;
};

CardWrapper.propTypes = {
    flex_direction: PropTypes.string.isRequired,
}

CardWrapper.defaultProps = {
  stock: {
    hot: false,
    id: 1,
    name: "Apple Macbook Pro",
    attribute:
      "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor",
    price: "$499",
    oldPrice: "$599",
    image: lp
  }
};


export default CardWrapper;
