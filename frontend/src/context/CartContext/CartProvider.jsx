import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

/* 

item = {
    id: string 'C{id}{color}{storageSize},
    content: {
        id: int,
        quantity:,
        colors: string[],
        imageUrl: string[],
        storageSize: string[]
    }
}

*/
export const CartProvider = ({ children }) => {
    const [ shoppingCart, setShoppingCart ] = useState(new Map())

    const addToCart = (item) => {
        console.log(item)
        const cart = new Map(JSON.parse(localStorage.getItem('cart')))
        const hasComputer = cart.has(item.key)
        if(hasComputer){
            const computer = cart.get(item.key)
            computer.quantity += 1
        } else {
            cart.set(item.key, item.content)
        }
        localStorage.setItem('cart', JSON.stringify([...cart]))
    }

    // useEffect(() => {
    //     console.log(shoppingCart)
    // }, [shoppingCart])


    useEffect(() => {
        const cart = localStorage.getItem('cart')

        if(!cart){
            const newCart = new Map()
            localStorage.setItem('cart', JSON.stringify([...newCart]))
        }
        
        
    }, [])
    return(
        <CartContext.Provider value={{shoppingCart, setShoppingCart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}