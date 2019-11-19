import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './views/homepage/home'
import HomePage2 from './views/homepage/home2'
import Product from './views/products/product'
import BouncerProductsProvider from './context/BouncerProductsContext'
import CartProvider from './context/CartContext'
import Cart from './views/cart/Cart'



export default function AppRoutes () {
   
    return  (
        <BouncerProductsProvider>
            <CartProvider>
                <Router>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/home' component={HomePage2} />
                    <Route exact path='/product' component={Product} />
                    <Route exact path='/cart' component={Cart} />
                </Router>
            </CartProvider>
        </BouncerProductsProvider>
    )
}
