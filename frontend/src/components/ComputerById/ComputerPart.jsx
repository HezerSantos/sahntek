const ComputerPart = ({type, partName}) => {
    return(
        <>
            <div className="computer__part">
                <h1>{type}:</h1>
                <p>{partName}</p>
            </div>
        </>
    )
}

export default ComputerPart