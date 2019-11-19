import React, {useState, createContext} from 'react';
import { Products } from "../data/products";

export const BouncerProductsContext = createContext();

const BouncerProductsProvider = ({children}) => {
    const [bouncerProducts, setBouncerProducts] = useState(Products);
    return ( 
        <BouncerProductsContext.Provider value={{bouncerProducts}}>
            {children}
        </BouncerProductsContext.Provider>
     );
}
 
export default BouncerProductsProvider;
