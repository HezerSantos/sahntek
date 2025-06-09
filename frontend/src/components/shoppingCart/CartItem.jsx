import image from '../../assets/images/computerImage.PNG'
const CartItem = ({content, price, name}) => {
    return(
        <>
            <div className="cart-item"> 
                <img src={content.imageUrl} alt="" />
                <div className='cart-item-wrapper'>
                    <div className='cart-item-content'>
                        <h1>Custom Performance Desktop PC – {name}</h1>
                        <p>Color: <strong>{content.color}</strong></p>
                        <p>${price}</p>
                    </div>
                    <div className='cart-item__button-container'>
                        <button>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem