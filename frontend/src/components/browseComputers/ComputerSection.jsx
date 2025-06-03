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
//ADD EVENTLISTENR TO WINDOW TO HIDE BUTTONS PROPERLY
const ComputerSection = ({className, sectionName, isLoading, computerContent, type, price }) => {
    const computerCardContainer = useRef(null)
    const computerForward = useRef(null)
    const computerBack = useRef(null)
    const [ isOverflow, setIsOverflow ] = useState(false)
    useEffect(() => {
        if(computerCardContainer.current?.scrollLeft === 0){
            computerBack.current?.classList.add('hide')
        }
        computerCardContainer.current?.scrollLeft + computerCardContainer.current?.clientWidth >= computerCardContainer.current?.scrollWidth? computerForward.current?.classList.add('hide') : computerForward.current?.classList.remove('hide')
        const calculateSize = (e) => {
            e.target.scrollLeft === 0? computerBack.current?.classList.add('hide') : computerBack.current?.classList.remove('hide')
            e.target.scrollLeft + e.target.clientWidth >= e.target.scrollWidth? computerForward.current?.classList.add('hide') : computerForward.current?.classList.remove('hide')
        }

        computerCardContainer.current?.addEventListener('scroll', calculateSize)

        const checkOverflow = () => {
            computerCardContainer.current?.scrollLeft + computerCardContainer.current?.clientWidth >= computerCardContainer.current?.scrollWidth? computerForward.current?.classList.add('hide') : computerForward.current?.classList.remove('hide')
        };

        const resizeObserver = new ResizeObserver(() => {
            checkOverflow()
        })

        if(computerCardContainer){
            resizeObserver.observe(computerCardContainer.current)
        }
        return () => {
            computerCardContainer.current?.removeEventListener('scroll', calculateSize)
            if(computerCardContainer){
                resizeObserver.unobserve(computerCardContainer.current)
            }
        }
    }, [])

    return(
        <>
            <section className={className}>
                <div className="computer__card__wrapper">
                    <h1>{sectionName.split(' ')[0]} <span>{sectionName.split(' ')[1]}</span></h1>
                    <div className="computer__card__container" ref={computerCardContainer}>
                        {isLoading? (
                            <>
                                <ComputerCardSkeleton />
                                <ComputerCardSkeleton />
                                <ComputerCardSkeleton />
                                <ComputerCardSkeleton />
                                <ComputerCardSkeleton />
                                <ComputerCardSkeleton />
                                <ComputerCardSkeleton />
                                
                            </>
                         ) : (
                            <>
                                {computerContent.map((computer, index) => {
                                    return(
                                        <ComputerCardNormal
                                            key={index} 
                                            imageUrl={computer.imageUrl}
                                            name={computer.name}
                                            type={type}
                                            price={price}
                                        />
                                    )
                                })}
                            </>
                         )

                        }
                        
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