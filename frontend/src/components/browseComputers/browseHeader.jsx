import { useRef } from "react";
import ComputerCard from "./ComputerCard"
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const scrollCard = (direction, container) => {
    const computerCard = container.current?.querySelector('.computer__card')
    const cardWidth = computerCard.offsetWidth

    const containerStyle = getComputedStyle(container.current)


    const leftPadding = parseFloat(containerStyle.paddingLeft) || 0;
    const rightPadding = parseFloat(containerStyle.paddingRight) || 0;

    const gap = parseFloat(containerStyle.gap || 0);

    const scrollDistance = cardWidth + gap + leftPadding + rightPadding;
    container.current?.scrollBy({
        left: direction * scrollDistance,
        behavior: 'smooth'
    })
}
const BrowseHeader = () => {
    const browseAdvertise = useRef(null)

    return(
        <>
            <header className="browse__header">
                <section className="browse__header__content"> 
                    <div className="browse__advertise" ref={browseAdvertise}>
                        <ComputerCard />
                        <ComputerCard />
                    </div>
                    <div className="browse__information">
                        <div className="browse__information__content">
                            <h1>
                                Featured PC Deals: Unbeatable <span>Performance</span>, Unbelievable <span>Prices</span>!
                            </h1>
                            <p>
                                "Unlock incredible <span>performance</span> at a price that won’t break the bank! Our featured PC deals offer high-end builds starting at just $700, including a <span>Phanteks mid-tower case</span> with sleek ARGB lighting and top-tier components designed to elevate your gaming and productivity experience. Whether you're gaming, streaming, or tackling demanding tasks, this custom-built PC has everything you need to stay ahead. Don't miss out on these <span>limited-time offers</span> — upgrade your setup today and experience power and style, all within your budget!
                            </p>
                        </div>
                    </div>
                    <button className="back__button computer__header__button" onClick={() => scrollCard(-1, browseAdvertise)}>
                        <IoArrowBackOutline />
                    </button>
                    <button className="forward__button computer__header__button" onClick={() => scrollCard(1, browseAdvertise)}>
                        <IoArrowForwardOutline />
                    </button>
                </section>
            </header>
        </>
    )
}

export default BrowseHeader