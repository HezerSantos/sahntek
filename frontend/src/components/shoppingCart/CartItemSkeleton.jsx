const CartItemSkeleton = () => {
    return(
        <>
            <div className="cart-item-skeleton"> 
                <div className='cart-item-skeleton__image'></div>
                <div className='cart-item-skeleton__wrapper'>
                    <div className='cart-item-skeleton__wrapper__content'>
                        <h1></h1>
                        <p></p>
                        <p></p>
                    </div>
                    <button className='cart-item-skeleton__wrapper__button'>
                        Remove
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartItemSkeleton