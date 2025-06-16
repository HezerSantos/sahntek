import { useContext, useEffect, useState } from "react";
import { CsrfContext } from "./CsrfContext";
import { jwtDecode } from 'jwt-decode'
import { ErrorContext } from "../ErrorContext/ErrorContext";
import axios from "axios";
export const CsrfProvider = ({children}) => {
    const  [ csrfToken, setCsrfToken ] = useState(null)
    const { setError, setErrorFlag } = useContext(ErrorContext)

    const getCsrf = async () => {
        try {
            const res = await axios.get(`${api.apiUrl}/api/auth/csrf`)
            const cookieMap = new Map(document.cookie.split(';').map(cookie => {
                return [cookie.split("=")[0].replace(/\s+/g, ''), cookie.split("=")[1]]
            }))
            console.log(res)
            const token = jwtDecode(cookieMap.get('__Host.csrf-token'))

            setCsrfToken(token.csrf)
        } catch (e) { 
            setError(e)
            setErrorFlag(true)
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
        <CsrfContext.Provider value={{csrfToken, setCsrfToken, getCsrf, setError}}>
            {children}
        </CsrfContext.Provider>
    )
}