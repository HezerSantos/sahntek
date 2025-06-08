import CartItem from "./CartItem"

const ShoppingCartMain = () => {
    return (
        <>
            <main className="background__primary shopping-cart-main">
                <section className="shopping-cart__cart-section"> 
                    <h1>Your Cart</h1>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </section>
            </main>
        </>
    )
}

export default ShoppingCartMain