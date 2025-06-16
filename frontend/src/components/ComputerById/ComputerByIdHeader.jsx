import ComputerColorButton from './ComputerColorButton'
import ComputerColorButtonSkeleton from './ComputerColorButtonSkeleton'

import { LuCircuitBoard, LuPower  } from "react-icons/lu";
import { MdOutlineDiamond } from "react-icons/md";

const ComputerByIdHeader = ({name, urls, isLoading, currentComputer, setCurrentComputer, typeName}) => {
    return(
        <>
            <header className="background__primary computer__by__id__header">
                <div className='cXid__header'>
                    {isLoading? (
                        <div className='skeleton-image__computer__header'></div>
                    ) : (
                        <img src={currentComputer?.url} alt="" />
                    )}
                    <div>
                        <h1>Custom Performance Desktop PC - 
                            {isLoading? (
                                <span className='skeleton-span'></span>
                            ) : (
                                <span> {name}</span>
                            )}
                            
                        </h1>
                        <div>
                            {typeName === "Pro" && (
                                <>
                                    <LuCircuitBoard /><h1>{typeName} Performance</h1>
                                </>
                            )}
                            {typeName === "Advanced" && (
                                <>
                                    <LuPower /><h1>{typeName} Performance</h1>
                                </>
                            )}
                            {typeName === "Premium" && (
                                <>
                                    <MdOutlineDiamond /><h1>{typeName} Performance</h1>
                                </>
                            )}
                        </div>

                        <p>
                            Color: 
                            {isLoading? (
                                <span className='skeleton-span'></span>
                            ) : (
                                <strong> {currentComputer?.color}</strong>
                            )}
                            
                        </p>
                        <div>
                            {isLoading? (
                                <>
                                    <ComputerColorButtonSkeleton />
                                    <ComputerColorButtonSkeleton />
                                    <ComputerColorButtonSkeleton />
                                </>
                            ) : (
                                <>
                                    {urls.map((url, index) => {     
                                        return(
                                            <ComputerColorButton 
                                                key={`${url}-${index}`}
                                                url={url}
                                                urlList={urls}
                                                index={index}
                                                setCurrentComputer={setCurrentComputer}
                                            />
                                        )
                                    })}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default ComputerByIdHeader