import ComputerPart from "./ComputerPart"

const ComputerPartSection = () => {
    return(
        <>
            <section className="computer__part__section">
                <div className="computer__part__content">
                    <div className="computer__part--parts">
                        <h1>Whats Inside</h1>

                        <ComputerPart type={'Processor'} partName={'AMD Ryzen 7 5800X Processor'}/>
                        <ComputerPart type={'Memory'} partName={'HyperX 16 GB DDR4-3200 XMP RGB SDRAM memory'}/>
                        <ComputerPart type={'Graphics Card'} partName={'NVIDIA GeForce RTX 3070 graphics card with 8 GB GDDR6 dedicated memory'}/>
                        <ComputerPart type={'Storage'} partName={'1 TB PCIe NVMe M.2 Solid State Drive'}/>
                        <ComputerPart type={'Motherboard'} partName={'MSI MAG B550 TOMAHAWK'}/>
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