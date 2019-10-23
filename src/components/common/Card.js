import styled from 'styled-components';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Product} from '../../data/products';
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";



const CardWrapper = ({ flex_direction }) => {
    const [showLikeBtn, setShowLikeBtn] = useState('none')
    const [likeBtn, setLikeBtn] = useState({ iconColor: "#33a0ff", likedBackground: false })
    const [cartBtn, setCartBtn] = useState({ iconColor: "#33a0ff", cartIconBackground: false})

    const CardWrapperDIV = styled.div`
        display:flex;
        flex-direction: ${flex_direction};
        width: 270px;
        justify-content: space-around;
        align-items: center;
        height: 349px;
        border-radius: 4px;
        margin-bottom: 30px;
        position: relative;
        border: solid 3px #f6f7f8;
    `;
    const ImageDIV = styled.div`
        width: 236px;
        display: ${showLikeBtn};
        justify-content: center;
        align-items: center;
        cursor: pointer;
        height: 153px;
        opacity: 0.95;
        background-color: #fafafb;
        position: absolute;
        top: 30px;        
    `;
    
    const hoverHandler = () => {
        const stateChecker = showLikeBtn ==='none'?"flex":"none"
        setShowLikeBtn(stateChecker)
    }
    const handleLike = () => {
        const checkLike = likeBtn.iconColor === '#33a0ff' ? "#ffffff" : '#33a0ff';
        setLikeBtn({
            iconColor: checkLike,
            likedBackground: !likeBtn.likedBackground
        })
    }
    const handleCart = () => {
        const setCart = {
            cartIconBackground: true,
            iconColor: "#ffffff"
        }
        setCartBtn(setCart)
    }

    return (
        <CardWrapperDIV>
            <div>
                <img onMouseEnter={hoverHandler} className="imgTest" src={Product[0].image} alt="some img" />
                <ImageDIV onMouseLeave={hoverHandler} className="imageDIV">
                    <div className={cartBtn.cartIconBackground ? "addIndex addBackground" : "addIndex"}>
                        <FaShoppingCart onClick={handleCart} color={cartBtn.iconColor}></FaShoppingCart>
                    </div>
                    <div className={likeBtn.likedBackground ? "addIndex addBackground" : "addIndex"}>
                        <FaHeart onClick={handleLike} color={likeBtn.iconColor}></FaHeart>
                    </div>
                </ImageDIV>

            </div>
            <div className='test'>
                <h5 className="product_name">
                    Apple Macbook Pro
                </h5>
                <h5 className="flex_div">
                    <FaStar color="#ffc600" size="10.9px" />
                    <FaStar color="#ffc600" size="10.9px"/>
                    <FaStar color="#ffc600" size="10.9px"/>
                    <FaStar color="#ffc600" size="10.9px"/>
                    <FaStar color="#ffc600" size="10.9px"/>
                    <FaStar color="#c1c8ce" size="10.9px"/>
                </h5>
                <div className='flex_div'>
                    <h5 className="product_price">
                        $499
                </h5>
                    <h5 className="product_old_price">
                        $599
                </h5>
                </div>
            </div>
            
        </CardWrapperDIV>
    );
}

CardWrapper.propTypes = {
    flex_direction: PropTypes.string.isRequired,
}


export default CardWrapper;
