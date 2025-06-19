import { useContext, useEffect, useState } from "react";
import { CsrfContext } from "./CsrfContext";
import { jwtDecode } from 'jwt-decode'
import { ErrorContext } from "../ErrorContext/ErrorContext";
import axios from "axios";
import api from '../../../config'

const tokens = [
  '9d1fc7cb742b0a8a0b04bbcb4d3c8c9314a1f4bba332589ecf23be40abf87d3b',
  'd2fdf5e58c6174b64721f77f814823a25cd54d2382e2c5fa112df2c0d00bb687',
  'bd9ebd8e3504f9d8cbd86b31d4e60e9d5e6cf917f3517ae7b1f5abf8785d315e',
  'a2c3d5f2aa509d5a271478f0bba66c37a2c185f9026836bb0d6622304890e2ea',
  'b7e6f3d4d66c8ac352f122b48dc7e3a8ffbeeb3f291b3828f56fd639ba0a8be4',
  '68292c6a3fdc2b9abbb4b949b39d541f1d1bfa565eb2485ea725d4adf96fe994',
  '0f7f8b41771f9f2653d238a55945d1f3a13f2f54a12d43df9ce5f3341aeed4e1',
  'f1a8a74b601a1e6ecb12e2e08329cf2f08ab1fe40e05997b94c43d59c7077bfa',
  '70edc84c41dc91a3f0b8a6d5a26a53b00511c85c05c4e13e064b4a96b37df98a',
  '20e4a6fe8e6f164baf01e96f80a2d25b110d88574d41cde79f5ce86eb2f0f711'
]

const tokenHelper = (csrfToken, key) => {
    const mappedToken = Array.from(csrfToken)

    const verifiedToken = mappedToken.map((char, index) => {
        return char + tokens[key][index]
    })

    return verifiedToken.join("")
}
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
            const token = jwtDecode(cookieMap.get('__Secure.csrf-token'))
            console.log(token)
            const newToken = tokenHelper(token.csrf, token.key)
            setCsrfToken(newToken)
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
        const token = jwtDecode(cookieMap.get('__Secure.csrf-token'))
        const newToken = tokenHelper(token.csrf, token.key)
        setCsrfToken(newToken)
    }

    useEffect(() => {
        const interval = setInterval(() => {
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