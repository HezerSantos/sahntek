import { useEffect, useState } from "react"
import CartItem from "./CartItem"
import CartItemSkeleton from "./CartItemSkeleton"

const ShoppingCartMain = () => {
    const [ shoppingCart, setShoppingCart ] = useState()
    const [ isLoading, setIsLoading ] = useState(true)
    useEffect(() => {
        setShoppingCart(() => {
            const cart = JSON.parse(localStorage.getItem('cart'))
            return cart
        })
        setIsLoading(false)
    }, [])

    useEffect(() => {
        console.log(shoppingCart)
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
                        shoppingCart.map((item, index) => {
                            return(
                                <CartItem 
                                    key={`${item.name}${item.id}${item.content.color}`}
                                    content={item.content}
                                    price={item.price}
                                    name={item.name}
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