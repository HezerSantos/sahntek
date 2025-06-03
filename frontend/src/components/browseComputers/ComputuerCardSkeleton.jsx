import computerTestImage from '../../assets/images/computerTestImage.png'
const ComputerCardSkeleton = () => {
    return(
        <>
            <div className="computer__card__normal skeleton__container">
                <div className='skeleton__image'/>
                <div>
                    <p className='skeleton sk__desc'>
                    </p>
                    <p className='skeleton sk__type'></p>
                    <p className='skeleton sk__price'></p>
                    <button className='skelton__button'></button>
                </div>
            </div>
        </>
    )
}

export default ComputerCardSkeleton