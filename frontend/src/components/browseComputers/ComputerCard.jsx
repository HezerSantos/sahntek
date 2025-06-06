import { Link, useNavigate } from "react-router-dom"
const ComputerCard = ({id, name, url}) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="computer__card">
                <img src={url} alt="" className='computer__image'/>
                <div>
                    <Link className='card__header' to={`/browse-computers/${id}`}>
                        {name}
                    </Link>
                    <h1 className='card__price'>From $1500</h1>
                    <button onClick={() => navigate(`/browse-computers/${id}`)} className='card__button'>Explore</button>
                </div>
            </div>
        </>
    )
}

export default ComputerCard