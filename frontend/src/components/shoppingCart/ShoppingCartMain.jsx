import { useEffect, useRef, useState } from "react"
import CartItem from "./CartItem"
import CartItemSkeleton from "./CartItemSkeleton"

const ShoppingCartMain = () => {
    const [ shoppingCart, setShoppingCart ] = useState(new Map())
    const [ isLoading, setIsLoading ] = useState(true)
    const shoppingCartSection = useRef(null)
    const [ isEmpty, setIsEmpty ] = useState(false)
    useEffect(() => {
        setShoppingCart(() => {
            const cart = new Map(JSON.parse(localStorage.getItem('cart')))
            return cart
        })
        setIsLoading(false)

        const checkChildren = () => {
            if(shoppingCartSection.current.children.length <= 1){
                setIsEmpty(true)
            }
        }
        const shoppingCartObserver = new MutationObserver(() => {
            checkChildren()
        })

        if(shoppingCartSection){
            shoppingCartObserver.observe(shoppingCartSection.current, {
                childList: true
            })
        }

        return () => {
            if(shoppingCartSection.current){
                shoppingCartObserver.disconnect()
            }
        }
    }, [])

    useEffect(() => {
1
    }, [shoppingCart])
    return (
        <>
            <main className="background__primary shopping-cart-main">
                <section className="shopping-cart__cart-section" ref={shoppingCartSection}> 
                    <h1>Your Cart</h1>
                    {isLoading? (
                        <>
                            <CartItemSkeleton />
                            <CartItemSkeleton />
                            <CartItemSkeleton />
                        </>
                    ) : (
                        isEmpty? (
                            <>
                                <p>Your Cart is Empty</p>
                            </>
                        ) : (
                            [...shoppingCart].map(( [ key, value ], index) => {
                                return(
                                    <CartItem 
                                        key={key}
                                        itemKey={key}
                                        contentO={value}
                                    />
                                )
                            })
                        )
                    )}
                </section>
            </main>
        </>
    )
}

export default ShoppingCartMain