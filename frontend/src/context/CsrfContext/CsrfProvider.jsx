import { useContext, useEffect, useState } from "react";
import { CsrfContext } from "./CsrfContext";
import { jwtDecode } from 'jwt-decode'
import { ErrorContext } from "../ErrorContext/ErrorContext";
export const CsrfProvider = ({children}) => {
    const  [ csrfToken, setCsrfToken ] = useState(null)
    const  [ csrfLoading, setCsrfLoading ] = useState(true)
    const { setError, setErrorFlag } = useContext(ErrorContext)

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

    useEffect(() => {
        const interval = setInterval(() => {
          console.log('New Csrf')
          getCsrf()
        }, 150000)
    
        return () => clearInterval(interval)
    }, [])
    
    return(
        <CsrfContext.Provider value={{csrfToken, setCsrfToken, getCsrf, csrfLoading}}>
            {children}
        </CsrfContext.Provider>
    )
}