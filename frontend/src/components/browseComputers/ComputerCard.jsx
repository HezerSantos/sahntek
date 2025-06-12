import { Link, useNavigate } from "react-router-dom"
const ComputerCard = ({id, name, url}) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="computer__card">
                {/https?:\/\/[^\s/$.?#].[^\s]*/.test(url)? (
                    <img src={url} alt="" className='computer__image'/>
                ) : (
                    <img className="featured-deal-skeleton__image" alt={name}/>
                )}
                <div>
                    <Link className='card__header' to={`/browse-computers/${id}`}>
                        {name}
                    </Link>
                    
                    <button onClick={() => navigate(`/browse-computers/${id}`)} className='card__button'>Explore</button>
                </div>
            </div>
        </>
    )
}

export default ComputerCard