import { useContext, useEffect, useState } from "react";
import { CsrfContext } from "./CsrfContext";
import { jwtDecode } from 'jwt-decode'
import { ErrorContext } from "../ErrorContext/ErrorContext";
import axios from "axios";
import api from '../../../config'
export const CsrfProvider = ({children}) => {
    const  [ csrfToken, setCsrfToken ] = useState(null)
    const { setError, setErrorFlag } = useContext(ErrorContext)
    const [ csrfLoading, setCsrfLoading ] = useState(true)
    const getCsrf = async () => {
        try {
            const res = await axios.get(`${api.apiUrl}/api/auth/csrf`)
            const cookieMap = new Map(document.cookie.split(';').map(cookie => {
                return [cookie.split("=")[0].replace(/\s+/g, ''), cookie.split("=")[1]]
            }))
            const token = jwtDecode(cookieMap.get('__SecureCsrf-token'))
            setCsrfToken(token.csrf)
            setCsrfLoading(false)
        } catch (e) { 
            setError(e)
            setErrorFlag(true)
            setCsrfLoading(false)
        }
    }

    const restoreCsrf = () => {
        const cookieMap = new Map(document.cookie.split(';').map(cookie => {
            return [cookie.split("=")[0].replace(/\s+/g, ''), cookie.split("=")[1]]
        }))
        const token = jwtDecode(cookieMap.get('__SecureCsrf-token'))
        setCsrfToken(token.csrf)
    }

    useEffect(() => {
        const interval = setInterval(() => {
          console.log('New Csrf')
          getCsrf()
        }, 150000)
    
        return () => clearInterval(interval)
    }, [])

    // useEffect(() => { //HERE
    //     console.log("Useeffect:", csrfToken)
    // }, [csrfToken])
    
    return(
        <CsrfContext.Provider value={{csrfToken, setCsrfToken, getCsrf, csrfLoading, setCsrfLoading, restoreCsrf}}>
            {children}
        </CsrfContext.Provider>
    )
}