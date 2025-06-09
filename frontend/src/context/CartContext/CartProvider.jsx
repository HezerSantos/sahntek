import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

/* 

item = {
    id: int,
    content: {
        colors: string[],
        imageUrl: string[],
        storageSize: string[]
    }
}

*/
export const CartProvider = ({ children }) => {
    const [ shoppingCart, setShoppingCart ] = useState(new Map())

    const addToCart = (item) => {
        // console.log(item)
        // setShoppingCart(prev => {
        //     const prevCart = new Map(prev)
        //     prevCart.set(item.id, item.content)
        //     const cart = localStorage.setItem('cart', JSON.stringify(Array.from(prevCart.entries())))

        //     return prevCart
        // })

        const cart = JSON.parse(localStorage.getItem('cart'))
        cart.push(item)
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    // useEffect(() => {
    //     console.log(shoppingCart)
    // }, [shoppingCart])


    useEffect(() => {
        const cart = localStorage.getItem('cart')

        if(!cart){
            localStorage.setItem('cart', JSON.stringify([]))
        }
        
        
    }, [])
    return(
        <CartContext.Provider value={{shoppingCart, setShoppingCart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}