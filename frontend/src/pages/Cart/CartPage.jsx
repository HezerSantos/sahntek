import { useContext, useEffect } from "react"
import { CartContext } from "../../context/CartContext/CartContext"
import '../../assets/styles/shoppingCart/shoppingCart.css'
import ShoppingCartHeader from "../../components/shoppingCart/ShoppingCartHeader"
import ShoppingCartMain from "../../components/shoppingCart/ShoppingCartMain"
import Footer from '../../components/universal/Footer'
const CartPage = () => {
    const { shoppingCart, setShoppingCart } = useContext(CartContext)

    useEffect(() => {
        console.log(shoppingCart)
    }, [])
    return(
        <>
            <ShoppingCartHeader />
            <ShoppingCartMain />
            <Footer />
        </>
    )
}

export default CartPage