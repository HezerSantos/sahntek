import { useEffect, useRef, useState } from "react"
import CartItem from "./CartItem"
import CartItemSkeleton from "./CartItemSkeleton"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import api from '../../../config'
import { useContext } from "react"
import { CsrfContext } from "../../context/CsrfContext/CsrfContext"
import { AiOutlineLoading } from "react-icons/ai";
import { ErrorContext } from "../../context/ErrorContext/ErrorContext"
const handleCheckout = async(csrfToken, restoreCsrf, setIsDisabled, setError, setErrorFlag) => {
    try{
        setIsDisabled(true)
        const shoppingCart = new Map(JSON.parse(localStorage.getItem('cart')))   
        const res = await axios.post(`${api.apiUrl}/api/stripe/checkout/sessions`, {
            shoppingCart: [...shoppingCart.entries()].map(([key, value]) => {
                return {
                    sku: key,
                    items: value
                }
            })
        }, {
            headers: {
                csrftoken: csrfToken
            }
        })
        window.location = res.data.url
    } catch(e) {
        setError(e)
        setErrorFlag(true)
    } finally {
        restoreCsrf()
    }
}

const ShoppingCartMain = () => {
    const [ shoppingCart, setShoppingCart ] = useState(new Map())
    const [ isLoading, setIsLoading ] = useState(true)
    const shoppingCartSection = useRef(null)
    const [ isEmpty, setIsEmpty ] = useState(false)
    const [ totalItems, setTotalItems ] = useState(0)
    const [ totalPrice, setTotalPrice ] = useState(0.00)
    const navigate = useNavigate()
    const { csrfToken, restoreCsrf } = useContext(CsrfContext)
    const { setError, setErrorFlag } = useContext(ErrorContext)
    const [ isDisabled, setDisabled ] = useState(false)
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
            const cartValues = [...shoppingCart]
            const allPrices = cartValues.map(([key, content]) => {
                return {
                    quantity: content.quantity, 
                    price: content.price
                }
            })
            const totalPrice = allPrices.map(({ quantity, price}) => {
                return quantity * price
            }).reduce((sum, price) => sum + price, 0)
            const totalItems = allPrices.map(({ quantity }) => {
                return quantity
            }).reduce((sum, quantity) => sum + quantity, 0)

            setTotalItems(totalItems)
            setTotalPrice(totalPrice)
            
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
                                <p>Your Cart is Empty <Link to="/browse-computers">Shop Now!</Link></p>
                            </>
                        ) : (
                            [...shoppingCart].map(( [ key, value ], index) => {
                                return(
                                    <CartItem 
                                        key={key}
                                        itemKey={key}
                                        contentO={value}
                                        setShoppingCart={setShoppingCart}
                                        isDisabled={isDisabled}
                                    />
                                )
                            })
                        )
                    )}
                    <div className="shopping-cart-submit">
                        <p>Subtotal {`(${totalItems} items): $${totalPrice.toFixed(2)}`}</p>
                        { totalItems > 0? (
                            <button disabled={isDisabled} className="shopping-cart-submit" onClick={() => handleCheckout(csrfToken, restoreCsrf, setDisabled, setError, setErrorFlag)}>
                                {isDisabled? (
                                    <AiOutlineLoading className="loading"/>
                                ) : (
                                    <>
                                        Proceed to Checkout
                                    </>
                                )}
                            </button>
                        ) : (
                            <button className="shopping-cart-submit" onClick={() => navigate('/browse-computers')}>Continue Shopping</button>
                        )}

                        
                    </div>
                </section>
                
            </main>
        </>
    )
}

export default ShoppingCartMain