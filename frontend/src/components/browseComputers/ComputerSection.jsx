import ComputerCardNormal from "./ComputerCardNormal"


const ComputerSection = ({className, sectionName, }) => {
    return(
        <>
            <section className={className}>
                <h1>{sectionName.split(' ')[0]} <span>{sectionName.split(' ')[1]}</span></h1>
                <div>
                    <ComputerCardNormal />
                </div>
            </section>
        </>
    )
}

export default ComputerSection