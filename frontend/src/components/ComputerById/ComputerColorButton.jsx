const handleComputerColorChange = (index, setCurrentComputer, urlList) => {
    setCurrentComputer(urlList[index])
}
const ComputerColorButton = ({url, urlList, index, setCurrentComputer}) => {
    return(
        <>
            <button 
                className='computer__color__button background__primary' 
                onClick={() => handleComputerColorChange(index, setCurrentComputer, urlList)}
            >
                <img src={url.url} alt="" />
            </button>
        </>
    )
}

export default ComputerColorButton