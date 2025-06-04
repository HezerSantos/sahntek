import computerImage from '../../assets/images/computerImage.PNG'

const ComputerColorButton = () => {
    return(
        <>
            <button className='computer__color__button background__primary'>
                <img src={computerImage} alt="" />
            </button>
        </>
    )
}

export default ComputerColorButton