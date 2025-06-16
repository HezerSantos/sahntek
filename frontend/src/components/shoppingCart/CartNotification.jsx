import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const CartNotification = ({imageUrl, setIsNotification}) => {
    const navigate = useNavigate()
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsNotification(false)
        }, 1800)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])
    return(
        <>
            <button className="shopping-cart-notification" onClick={() => navigate("/shopping-cart")}>
                <img src={imageUrl} alt="" />
                <div>
                    <p>An item has been added to the cart!</p>
                    <p>Click to View!</p>
                </div>
            </button>
        </>
    )
}

export default CartNotification