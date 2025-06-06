const ComputerPartSkeleton = ({type}) => {
    return(
        <>
            <div className="computer__part">
                <h1>{type}:</h1>
                <div className="skeleton-description"></div>
            </div>
        </>
    )
}
export default ComputerPartSkeleton
