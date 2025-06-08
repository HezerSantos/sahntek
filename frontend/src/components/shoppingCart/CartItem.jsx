import image from '../../assets/images/computerImage.PNG'
const CartItem = () => {
    return(
        <>
            <div className="cart-item"> 
                <img src={image} alt="" />
                <div className='cart-item-content'>
                    <h1>Custom Performance Desktop PC – Micro-ATX Tower</h1>
                    <p>Color: <strong>Whtie</strong></p>
                    <p>$1500</p>
                </div>
                <div className='cart-item__button-container'>
                    <button>
                        Remove
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartItem