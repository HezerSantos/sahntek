import { useEffect, useRef, useState } from "react";

const handleSelect = (e, setPrice, prevStoragePrice, setPrevStoragePrice, setStorageSelected) => {
    const storagePrice = e.target.value.split(" ")[1]
    setPrice(prevPrice => Number(storagePrice) + prevPrice - prevStoragePrice)
    setPrevStoragePrice(Number(storagePrice))

    setStorageSelected({name: e.target.id, price: Number(e.target.value.split(" ")[1])})
}
const ComputerPartStorage = ({ type, storageOptions, setPrice, setStorageSelected }) => {
    const [ prevStoragePrice, setPrevStoragePrice ] = useState(0)
    const formElement = useRef(null)
    useEffect(() => {
        formElement.current.children[0].children[1].checked = true
        const storagePrice = formElement.current?.children[0].children[1].value.split(" ")[1]
        setPrevStoragePrice(Number(storagePrice))
        setPrice(prevPrice => {
            return Number(storagePrice) + prevPrice
        })
        setStorageSelected({name: formElement.current.children[0].children[1].id, price: Number(formElement.current.children[0].children[1].value.split(" ")[1])})
    }, [storageOptions])
    return (
        <>
            <div className="computer__part storage">
                <h1>{type}:</h1>
                <div className="storage-container">
                    <form ref={formElement}>
                        {storageOptions.map((option, index) => {
                            return(
                                <div key={`SO${1000 + index}`}>
                                    <label htmlFor={option.name}>{option.name}</label>
                                    <input 
                                    type="radio" 
                                    id={option.name} 
                                    name="storage" 
                                    value={`${option.id} ${option.price}`}
                                    onChange={(e) => handleSelect(e, setPrice, prevStoragePrice, setPrevStoragePrice, setStorageSelected)}
                                    />
                                </div>
                            )
                        })}
                    </form>
                </div>
            </div>
        </>
    );
};

export default ComputerPartStorage;
