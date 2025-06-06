import { Link } from "react-router-dom"
const FeaturedDealSkeleton = ({id, name, url}) => {
    return (
        <>
            <div className="computer__card">
                <div className="featured-deal-skeleton__image">

                </div>
                <div>
                    <div className="featured-deal-skeleton__link"></div>
                    <div className="featured-deal-skeleton__price"></div>
                    <div className="featured-deal-skeleton__button"></div>
                </div>
            </div>
        </>
    )
}

export default FeaturedDealSkeleton