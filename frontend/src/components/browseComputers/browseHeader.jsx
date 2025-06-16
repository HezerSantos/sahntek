import { useEffect, useRef } from "react";
import ComputerCard from "./ComputerCard"
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import FeaturedDealSkeleton from "./FeaturedDealSkeleton";

import { LuCircuitBoard, LuPower  } from "react-icons/lu";
import { MdOutlineDiamond } from "react-icons/md";


const scrollCard = (direction, container) => {
    
    const computerCard = container.current?.querySelector('.computer__card')
    const cardWidth = computerCard.offsetWidth

    const containerStyle = getComputedStyle(container.current)


    const leftPadding = parseFloat(containerStyle.paddingLeft) || 0;
    const rightPadding = parseFloat(containerStyle.paddingRight) || 0;

    const gap = parseFloat(containerStyle.columnGap) || 0;
    const scrollDistance = cardWidth + gap + leftPadding + rightPadding;
    container.current?.scrollBy({
        left: direction * scrollDistance,
        behavior: 'smooth'
    })
}
const BrowseHeader = ({featuredDeals, isLoading}) => {
    const browseAdvertise = useRef(null)
    // useEffect(() => {
    //     console.log(featuredDeals)
    // }, [featuredDeals])
    return(
        <>
            <header className="browse__header background__primary">
                <section className="browse__header__content"> 
                    <h1 className="browse__header__header">Featured PC Deals</h1>
                    <div className="browse__advertise__wrapper">
                        <div className="browse__advertise" ref={browseAdvertise}>
                            {isLoading? (
                                <>
                                    <FeaturedDealSkeleton />
                                    <FeaturedDealSkeleton />
                                    <FeaturedDealSkeleton />
                                </>
                            ) : (
                                featuredDeals.map((deal, index) => {
                                    return(
                                        <ComputerCard 
                                            key={`FD100${index}`}
                                            url={deal.imageUrl}
                                            name={deal.name}
                                            id={deal.id}
                                        />
                                    )
                                })
                            )}
                        </div>
                        <button className="back__button computer__header__button" onClick={() => scrollCard(-1, browseAdvertise)}>
                            <IoArrowBackOutline />
                        </button>
                        <button className="forward__button computer__header__button" onClick={() => scrollCard(1, browseAdvertise)}>
                            <IoArrowForwardOutline />
                        </button>
                    </div>
                    <div className="browse__information">
                        <div className="browse__information__content">
                            <h1>
                                Featured PC Deals: Unbeatable <span>Performance</span>, Unbelievable <span>Prices</span>!
                            </h1>
                            <p>
                                Unlock incredible <span>performance</span> at a price that won’t break the bank!
                                <br />
                                <br />
                                 Whether you're gaming, streaming, or tackling demanding tasks, this custom-built PC has everything you need to stay ahead — upgrade your setup today and experience power and style, all within your budget!
                            </p>
                            <div className="performance-type-container">
                                <div>
                                    <LuCircuitBoard/>
                                    <p>Pro</p>
                                </div>
                                <div>
                                    <LuPower/>
                                    <p>Advanced</p>
                                </div>
                                <div>
                                    <MdOutlineDiamond/>
                                    <p>Premium</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </header>
        </>
    )
}

export default BrowseHeader