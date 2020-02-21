import React from 'react'
import Text from '../text'
import GoProWrapper from './styles'

const Card = ({product}) =>(
    
    <GoProWrapper>
        <div className="title">
            <Text large bold>
                {product.productTitle}
            </Text>
        </div>
        <div className="description">
            <Text xSmall>
                {product.productDescription}
            </Text>
        </div>

        <div className="price">
            <Text>
                {product.productPrice}
            </Text>
        </div>
        <div className="image">
            <img src={product.productUrl} alt="GoPro" />

        </div>
    </GoProWrapper>
)
 
export default Card;
