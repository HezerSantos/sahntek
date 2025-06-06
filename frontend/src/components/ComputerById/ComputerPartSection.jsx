import ComputerPart from "./ComputerPart"
import ComputerPartSkeleton from "./ComputerPartSkeleton"

const ComputerPartSection = ({
    cpu,
    ram,
    gpu,
    mobo,
    cooler,
    price,
    isLoading
}) => {
    return(
        <>
            <section className="computer__part__section">
                <div className="computer__part__content">
                    <div className="computer__part--parts">
                        <h1>Whats Inside</h1>
                        {isLoading? (
                            <>  
                                <ComputerPartSkeleton type={'Processor'}/>
                                <ComputerPartSkeleton type={'Memory'}/>
                                <ComputerPartSkeleton type={'Graphics Card'}/>
                                <ComputerPartSkeleton type={'Storage'}/>
                                <ComputerPartSkeleton type={'Motherboard'}/>
                                <ComputerPartSkeleton type={'Cooler'}/>
                                <ComputerPartSkeleton type={'Operating System'}/>
                                <ComputerPartSkeleton type={'Build Fee'}/>
                            </>
                        ) : (
                            <>
                                <ComputerPart type={'Processor'} partName={cpu}/>
                                <ComputerPart type={'Memory'} partName={ram}/>
                                <ComputerPart type={'Graphics Card'} partName={gpu}/>
                                <ComputerPart type={'Storage'} partName={'1 TB PCIe NVMe M.2 Solid State Drive'}/>
                                <ComputerPart type={'Motherboard'} partName={mobo}/>
                                <ComputerPart type={'Cooler'} partName={cooler}/>
                                <ComputerPart type={'Operating System'} partName={'Windows 11'}/>
                                <ComputerPart type={'Build Fee'} partName={'$50'}/>
                            </>
                        )}

                    </div>
                    <div className="computer__part--button">
                        {isLoading? (
                            <>
                                <div className="skeleton-price"></div>  
                                <div className="skeleton-price__button"></div>
                            </>
                        ) : (
                            <>
                                <h1>${price}</h1>
                                <button>
                                    Add to Cart
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComputerPartSection