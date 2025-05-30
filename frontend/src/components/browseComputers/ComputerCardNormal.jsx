import computerTestImage from '../../assets/images/computerTestImage.png'
const ComputerCardNormal = () => {
    return(
        <>
            <div className="computer__card__normal">
                <img src={computerTestImage} alt="" />
                <div>
                    <p className='computer__description'>
                        Custom Built PC: Vetroo AL800 Mid-Tower with ARGB - E-ATX Compatability
                    </p>
                    <p className='computer__type'>Pro Performance</p>
                    <p className='computer__price'>From $300</p>
                    <button className='computer__button'>Explore</button>
                </div>
            </div>
        </>
    )
}

export default ComputerCardNormal