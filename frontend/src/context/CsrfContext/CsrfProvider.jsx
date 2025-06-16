import { useEffect, useState } from "react";
import { CsrfContext } from "./CsrfContext";
import { jwtDecode } from 'jwt-decode'
export const CsrfProvider = ({children}) => {
    const  [ csrfToken, setCsrfToken ] = useState(null)

    const checkCookie = () => {
        if(document.cookie){
            const cookieMap = new Map(document.cookie.split(';').map(cookie => {
              return [cookie.split("=")[0], cookie.split("=")[1]]
            }))
            if(cookieMap.size === 0){
                return
            }
            console.log(cookieMap)

            console.log()

            console.log(cookieMap.get('__Host.csrf-token'))
            const token = jwtDecode(cookieMap.get('__Host.csrf-token'))

            setCsrfToken(token.csrf)
        }
    }
    
    // useEffect(() => {
    //     console.log(csrfToken)
    // }, [csrfToken])
    return(
        <CsrfContext.Provider value={{csrfToken, setCsrfToken, checkCookie}}>
            {children}
        </CsrfContext.Provider>
    )
}