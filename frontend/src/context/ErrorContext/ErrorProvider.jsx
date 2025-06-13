import { useEffect, useState } from "react"
import { ErrorContext } from "./ErrorContext"

export const ErrorProvider = ({children}) => {
    const [ error, setError ] = useState(null)
    const [ errorFlag, setErrorFlag ] = useState(false)

    // useEffect(() => {
    //     if(errorFlag){
    //         throw error
    //     }
        
    //     setErrorFlag(false)
        
    // }, [errorFlag])
    return(
        <ErrorContext.Provider value={{setErrorFlag, error, setError, errorFlag}}>
            {children}
        </ErrorContext.Provider>
    )
}