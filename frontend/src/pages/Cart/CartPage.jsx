import { useContext, useEffect } from "react"
import '../../assets/styles/shoppingCart/shoppingCart.css'
import ShoppingCartHeader from "../../components/shoppingCart/ShoppingCartHeader"
import ShoppingCartMain from "../../components/shoppingCart/ShoppingCartMain"
import Footer from '../../components/universal/Footer'
import { Helmet } from "react-helmet-async"
const CartPage = () => {
    
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])
    return(
        <> 
            <Helmet>
                <title>Shopping Cart - Sahntek</title>
            </Helmet>
            <ShoppingCartHeader />
            <ShoppingCartMain />
            <Footer />
        </>
    )
}

export default CartPage