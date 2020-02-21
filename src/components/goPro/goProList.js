import React from 'react'
import Card from './card';


const GoProList = ({products}) => (
    products.map((product, i)=>(
        <Card product={product} key={i}/>
    ))
)
 
export default GoProList;