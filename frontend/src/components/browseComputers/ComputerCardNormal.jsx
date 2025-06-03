const ComputerCardNormal = ({imageUrl, name, type, price}) => {
    return(
        <>
            <div className="computer__card__normal">
                <img src={imageUrl} alt={`image for ${name}`} />
                <div>
                    <p className='computer__description'>
                        Custom Built PC: {name}
                    </p>
                    <p className='computer__type'>{type} Performance</p>
                    <p className='computer__price'>From ${price}</p>
                    <button className='computer__button'>Explore</button>
                </div>
            </div>
        </>
    )
}

export default ComputerCardNormal