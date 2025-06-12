import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const handleNavigate = (navigate, id) => {
    navigate(`/browse-computers/${id}`)
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const ComputerCardNormal = ({imageUrl, name, type, price, id}) => {
    // useEffect(() => {
    //     console.log(imageUrl)
    // }, [])
    const navigate = useNavigate()
    return(
        <>
            <div className="computer__card__normal">
                {/https?:\/\/[^\s/$.?#].[^\s]*/.test(imageUrl)? (
                    <img src={imageUrl} alt={`image for ${name}`} />
                ) : (
                    <img className='skeleton__image' alt={name}/>
                )}
                <div>
                    <p className='computer__description'>
                        Custom Built PC: {name}
                    </p>
                    <p className='computer__type'>{type} Performance</p>
                    <p className='computer__price'>From ${price}</p>
                    <button className='computer__button' onClick={() => handleNavigate(navigate, id)}>Explore</button>
                </div>
            </div>
        </>
    )
}

export default ComputerCardNormal