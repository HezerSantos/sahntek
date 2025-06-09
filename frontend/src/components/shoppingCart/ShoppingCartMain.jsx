import { useEffect, useState } from "react"
import CartItem from "./CartItem"
import CartItemSkeleton from "./CartItemSkeleton"

const ShoppingCartMain = () => {
    const [ shoppingCart, setShoppingCart ] = useState()
    const [ isLoading, setIsLoading ] = useState(true)
    useEffect(() => {
        setShoppingCart(() => {
            const cart = new Map(JSON.parse(localStorage.getItem('cart')))
            return cart
        })
        setIsLoading(false)
    }, [])

    useEffect(() => {

    }, [shoppingCart])
    return (
        <>
            <main className="background__primary shopping-cart-main">
                <section className="shopping-cart__cart-section"> 
                    <h1>Your Cart</h1>
                    {isLoading? (
                        <>
                            <CartItemSkeleton />
                            <CartItemSkeleton />
                            <CartItemSkeleton />
                        </>
                    ) : (
                        [...shoppingCart].map(( [ key, value ], index) => {
                            return(
                                <CartItem 
                                    key={key}
                                    content={value}
                                />
                            )
                        })
                    )}
                </section>
            </main>
        </>
    )
}

export default ShoppingCartMain