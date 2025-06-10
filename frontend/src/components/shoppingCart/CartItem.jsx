import { useEffect, useState } from 'react'
import image from '../../assets/images/computerImage.PNG'
import { FaPlus, FaMinus, FaTrash   } from "react-icons/fa6";

const addItem = (setContent, itemKey, setShoppingCart) => {
    setContent(prev => {
        const newContent = {...prev}
        newContent.quantity += 1
        return newContent
    })

    const cart = new Map(JSON.parse(localStorage.getItem('cart')))
    const item = cart.get(itemKey)
    item.quantity += 1
    localStorage.setItem('cart', JSON.stringify([...cart]))
    setShoppingCart(cart)
}

const subtractItem = (setContent, itemKey, setShoppingCart) => {
        setContent(prev => {
        const newContent = {...prev}
        newContent.quantity -= 1
        return newContent
    })

    const cart = new Map(JSON.parse(localStorage.getItem('cart')))
    const item = cart.get(itemKey)
    item.quantity -= 1
    localStorage.setItem('cart', JSON.stringify([...cart]))
    setShoppingCart(cart)
}

const removeItem = (setIsItem, itemKey, setShoppingCart) => {
    setIsItem(false)
    const cart = new Map(JSON.parse(localStorage.getItem('cart')))
    cart.delete(itemKey)
    localStorage.setItem('cart', JSON.stringify([...cart]))
    setShoppingCart(cart)
}

const CartItem = ({itemKey, contentO, setShoppingCart}) => {
    const [ content, setContent ] = useState(contentO)
    const [ isItem, setIsItem ] = useState(true)
    
    return(
        <>
            {isItem && (
                <div className="cart-item"> 
                    <img src={content.imageUrl} alt="" />
                    <div className='cart-item-wrapper'>
                        <div className='cart-item-content'>
                            <h1>Custom Performance Desktop PC – {content.name}</h1>
                            <p>Storage: {content.storageSelected}</p>
                            <p>Color: <strong>{content.color}</strong></p>
                            <div className='cart-item-quantity'>
                                {content.quantity > 1? (
                                    <button onClick={() => subtractItem(setContent, itemKey, setShoppingCart)}><FaMinus /></button>
                                ): (
                                    <button onClick={() => removeItem(setIsItem, itemKey, setShoppingCart)}><FaTrash /></button>
                                )}
                                <input type="text" value={content.quantity} readOnly/>
                                <button onClick={() => addItem(setContent, itemKey, setShoppingCart)}><FaPlus /></button>
                            </div>
                            <p>${content.price * content.quantity}</p>
                        </div>
                        <div className='cart-item__button-container'>
                            <button onClick={() => removeItem(setIsItem, itemKey, setShoppingCart)}>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CartItem