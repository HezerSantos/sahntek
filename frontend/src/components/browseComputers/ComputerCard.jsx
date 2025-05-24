import computerImage from '../../assets/images/computerImage.PNG'
import { Link } from "react-router-dom"
const ComputerCard = () => {
    return (
        <>
            <div className="computer__card">
                <img src={computerImage} alt="" className='computer__image'/>
                <Link className='card__header'>
                    Custom Built PC: MSI Mid-Tower with ARGB - Micro ATX Compatibility
                    Premium Performance
                </Link>
                <h1 className='card__price'>From $1500</h1>
                <button className='card__button'>Explore</button>
            </div>
        </>
    )
}

export default ComputerCard