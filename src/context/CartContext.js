import React, {useState, createContext, useContext, useEffect} from 'react';
import { BouncerProductsContext } from './BouncerProductsContext';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const {bouncerProducts} = useContext(BouncerProductsContext)
    
    const [cart, setCart] = useState({
      bouncerProducts: [],
      total: 0.00,
      subTotal: 0.00,
      coupon: 0.00
    });

    const addItemToCart = (id) => {
        const addedItem = bouncerProducts.find(item => item.id === id)
        const checkIFItemExist = cart.bouncerProducts.find(
          item => item.id === id
        );
        if (checkIFItemExist){
            const newCart = {...cart}            
            const cartIndex = newCart.bouncerProducts.indexOf(checkIFItemExist);
            newCart.bouncerProducts[cartIndex].qty = newCart.bouncerProducts[
              cartIndex
            ].qty++;
            setCart(newCart);  
        }else{
            addedItem.qty = 1;
            setCart({
              ...cart,
              bouncerProducts: [...cart.bouncerProducts, addedItem]
            }); 
        }
    }

    useEffect(()=> {
      console.log(cart);
    })
    return (
      <CartContext.Provider value={{ cart, addItemToCart }}>
        {children}
      </CartContext.Provider>
    );
}
 
export default CartProvider;
