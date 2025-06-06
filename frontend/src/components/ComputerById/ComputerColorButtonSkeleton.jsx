import { useEffect } from 'react'
import computerImage from '../../assets/images/computerImage.PNG'

const ComputerColorButtonSkeleton = ({url}) => {
    return(
        <>
            <button className='computer__color__button background__primary'>
                <div className='skeleton-image__computerXid'></div>
            </button>
        </>
    )
}

export default ComputerColorButtonSkeleton