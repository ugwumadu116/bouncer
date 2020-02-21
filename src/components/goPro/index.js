import React from 'react'
import GoProList from './goProList';

const GoPro = ({products}) => (
    <div data-testid='gopro'>
        <GoProList products={products}/>
    </div>
)
 
export default GoPro;

GoPro.defaultProps = {
    products:[

        {
            productUrl:
            "https://res.cloudinary.com/decagonbouncer/image/upload/v1575976798/bouncer-frontend/gopro_k0hnnm.png", 
            productTitle: "GoPro Hero 6",
            productDescription: "Lorem ipsum dolor amet, consecteture adipisong elit, labor",
            productPrice: "$299"         
        }

    ]
}