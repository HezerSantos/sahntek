import ComputerPart from "./ComputerPart"

const ComputerPartSection = ({
    cpu,
    ram,
    gpu,
    mobo
}) => {
    return(
        <>
            <section className="computer__part__section">
                <div className="computer__part__content">
                    <div className="computer__part--parts">
                        <h1>Whats Inside</h1>

                        <ComputerPart type={'Processor'} partName={cpu}/>
                        <ComputerPart type={'Memory'} partName={ram}/>
                        <ComputerPart type={'Graphics Card'} partName={gpu}/>
                        <ComputerPart type={'Storage'} partName={'1 TB PCIe NVMe M.2 Solid State Drive'}/>
                        <ComputerPart type={'Motherboard'} partName={mobo}/>
                        <ComputerPart type={'Operating System'} partName={'Windows 11'}/>
                        <ComputerPart type={'Build Fee'} partName={'$50'}/>
                    </div>
                    <div className="computer__part--button">
                        <h1>$1,500</h1>
                        <button>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComputerPartSection