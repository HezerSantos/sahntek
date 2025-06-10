import { useEffect, useState } from "react";
import { CsrfContext } from "./CsrfContext";

export const CsrfProvider = ({children}) => {
    const  [ csrfToken, setCsrfToken ] = useState(null)
    
    // useEffect(() => {
    //     console.log(csrfToken)
    // }, [csrfToken])
    return(
        <CsrfContext.Provider value={{csrfToken, setCsrfToken}}>
            {children}
        </CsrfContext.Provider>
    )
}