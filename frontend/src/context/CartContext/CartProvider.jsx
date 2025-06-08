import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [ shoppingCart, setShoppingCart ] = useState(new Map())
    return(
        <CartContext.Provider value={{shoppingCart, setShoppingCart}}>
            {children}
        </CartContext.Provider>
    )
}