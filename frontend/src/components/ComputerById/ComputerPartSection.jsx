import { useContext, useState } from "react"
import ComputerPart from "./ComputerPart"
import ComputerPartSkeleton from "./ComputerPartSkeleton"
import ComputerPartStorage from "./ComputerPartStorage"
import { CartContext } from "../../context/CartContext/CartContext"

const handleCartSubmit = (addToCart, id, storageSelected, currentComputer, price, computerName) => {
    const item = {
        id: id,
        name: computerName,
        price: price,
        content: {
            color: currentComputer.color,
            imageUrl: currentComputer.url,
            storageSelected: storageSelected
        }
    }

    addToCart(item)
}
const ComputerPartSection = ({
    cpu,
    ram,
    gpu,
    mobo,
    cooler,
    price,
    setPrice,
    storageOptions,
    isLoading,
    id,
    setStorageSelected,
    storageSelected,
    currentComputer,
    computerName
}) => {
    const { addToCart } = useContext(CartContext)


    return(
        <>
            <section className="computer__part__section">
                <div className="computer__part__content">
                    <div className="computer__part--parts">
                        <h1>Whats Inside</h1>
                        {isLoading? (
                            <>  
                                <ComputerPartSkeleton type={'Processor'}/>
                                <ComputerPartSkeleton type={'Memory'}/>
                                <ComputerPartSkeleton type={'Graphics Card'}/>
                                <ComputerPartSkeleton type={'Storage'}/>
                                <ComputerPartSkeleton type={'Motherboard'}/>
                                <ComputerPartSkeleton type={'Cooler'}/>
                                <ComputerPartSkeleton type={'Operating System'}/>
                                <ComputerPartSkeleton type={'Build Fee'}/>
                            </>
                        ) : (
                            <>
                                <ComputerPart type={'Processor'} partName={cpu}/>
                                <ComputerPart type={'Memory'} partName={ram}/>
                                <ComputerPart type={'Graphics Card'} partName={gpu}/>
                                <ComputerPartStorage type={'Storage'} storageOptions={storageOptions} setPrice={setPrice} setStorageSelected={setStorageSelected}/>
                                <ComputerPart type={'Motherboard'} partName={mobo}/>
                                <ComputerPart type={'Cooler'} partName={cooler}/>
                                <ComputerPart type={'Operating System'} partName={'Windows 11'}/>
                                <ComputerPart type={'Build Fee'} partName={'$50'}/>
                            </>
                        )}

                    </div>
                    <div className="computer__part--button">
                        {isLoading? (
                            <>
                                <div className="skeleton-price"></div>  
                                <div className="skeleton-price__button"></div>
                            </>
                        ) : (
                            <>
                                <h1>${price}</h1>
                                <button onClick={() => handleCartSubmit(addToCart, id, storageSelected, currentComputer, price, computerName)}>
                                    Add to Cart
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComputerPartSection