import { useEffect, useRef, useState } from "react";
import ComputerCardNormal from "./ComputerCardNormal"
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import ComputerCardSkeleton from "./ComputuerCardSkeleton";
const scrollCard = (direction, container) => {
    const isAtStart = container.current?.scrollLeft === 0;
    const computerCard = container.current?.querySelector('.computer__card__normal')
    const cardWidth = computerCard.offsetWidth
    
    const containerStyle = getComputedStyle(container.current)


    const leftPadding = parseFloat(containerStyle.paddingLeft) || 0;
    const rightPadding = parseFloat(containerStyle.paddingRight) || 0;
    

    const scrollDistance = cardWidth + leftPadding + rightPadding;
    
    container.current?.scrollBy({
        left: direction * scrollDistance,
        behavior: 'smooth'
    })
}
const ComputerSection = ({className, sectionName, }) => {
    const computerCardContainer = useRef(null)
    const computerForward = useRef(null)
    const computerBack = useRef(null)
    const [ computerCardCount, setComputerCardCount ] = useState(0)
    useEffect(() => {
        if(computerCardContainer.current?.scrollLeft === 0){
            computerBack.current?.classList.add('hide')
        }

        const calculateSize = (e) => {
            e.target.scrollLeft === 0? computerBack.current?.classList.add('hide') : computerBack.current?.classList.remove('hide')
            e.target.scrollLeft + e.target.clientWidth >= e.target.scrollWidth? computerForward.current?.classList.add('hide') : computerForward.current?.classList.remove('hide')
        }
        computerCardContainer.current?.addEventListener('scroll', calculateSize)

        return () => {
            computerCardContainer.current?.removeEventListener('scroll', calculateSize)
        }
    }, [])

    useEffect(() => {
        // console.log(computerCardCount)
    }, [computerCardCount])
    return(
        <>
            <section className={className}>
                <div className="computer__card__wrapper">
                    <h1>{sectionName.split(' ')[0]} <span>{sectionName.split(' ')[1]}</span></h1>
                    <div className="computer__card__container" ref={computerCardContainer}>
                        {/* <ComputerCardSkeleton />
                        <ComputerCardSkeleton />
                        <ComputerCardSkeleton />
                        <ComputerCardSkeleton />
                        <ComputerCardSkeleton />
                        <ComputerCardSkeleton /> */}
                        <ComputerCardNormal />
                        <ComputerCardNormal />
                        <ComputerCardNormal />
                        <ComputerCardNormal />
                        <ComputerCardNormal />
                        <ComputerCardNormal />
                        <ComputerCardNormal />
                    </div>
                    <button ref={computerBack} className="computer__back__button computer__section__button" onClick={() => scrollCard(-1, computerCardContainer)}>
                        <IoArrowBackOutline />
                    </button>
                    <button ref={computerForward} className="computer__forward__button computer__section__button" onClick={() => scrollCard(1, computerCardContainer)}>
                        <IoArrowForwardOutline />
                    </button>
                </div>
            </section>
        </>
    )
}

export default ComputerSection