import { useEffect, useState } from "react";
import { CsrfContext } from "./CsrfContext";
import { jwtDecode } from 'jwt-decode'
export const CsrfProvider = ({children}) => {
    const  [ csrfToken, setCsrfToken ] = useState(null)
    const  [ csrfLoading, setCsrfLoading ] = useState(true)
    const checkCookie = () => {
        if(document.cookie){
            const cookieMap = new Map(document.cookie.split(';').map(cookie => {
              return [cookie.split("=")[0].replace(/\s+/g, ''), cookie.split("=")[1]]
            }))
            if(cookieMap.size === 0){
                return
            }
            // console.log(cookieMap)

            // console.log()

            // console.log(cookieMap.get('__Host.csrf-token'))
            const token = jwtDecode(cookieMap.get('__Host.csrf-token'))
            
            setCsrfToken(token.csrf)
            return token
        }
    }

    const getCsrf = async () => {
        try {
            const res = await axios.get(`${api.apiUrl}/api/auth/csrf`)
            const cookieMap = new Map(document.cookie.split(';').map(cookie => {
                return [cookie.split("=")[0].replace(/\s+/g, ''), cookie.split("=")[1]]
            }))
            
            const token = jwtDecode(cookieMap.get('__Host.csrf-token'))

            setCsrfToken(token.csrf)
            setCsrfLoading(false)
        } catch (e) { 
            setError(e)
            setErrorFlag(true)
            setCsrfLoading(false)
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