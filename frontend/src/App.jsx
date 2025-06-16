import { useState, useEffect, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import axios from "axios"
import './index.css'
import api from '../config'
import { CartProvider } from './context/CartContext/CartProvider'
import { jwtDecode } from 'jwt-decode'
import { CsrfContext } from './context/CsrfContext/CsrfContext'
import { ErrorProvider } from './context/ErrorContext/ErrorProvider'
import { ErrorContext } from './context/ErrorContext/ErrorContext'

function App() {
  const { setCsrfToken } = useContext(CsrfContext)
  const [ isLoading, setIsLoading ] = useState(true)

  const { setErrorFlag, setError, errorFlag, error } = useContext(ErrorContext)

    if(import.meta.env.VITE_NODE_ENV === 'production'){
        useEffect(() => {
            console.error = () => {};
        }, [])
    }
    axios.defaults.withCredentials = true;
    useEffect(() => {
        const getCsrf = async () => {
          try {
            const res = await axios.get(`${api.apiUrl}/api/auth/csrf`)
            const cookieMap = new Map(document.cookie.split(';').map(cookie => {
              return [cookie.split("=")[0], cookie.split("=")[1]]
            }))
            
            const token = jwtDecode(cookieMap.get('__Host.csrf-token'))

            setCsrfToken(token.csrf)
            setIsLoading(false)
          } catch (e) { 
            setError(e)
            setErrorFlag(true)
            setIsLoading(false)
          }
        }

        getCsrf()
        const interval = setInterval(() => {
          console.log('New Csrf')
          getCsrf()
        }, 150000)
    
        return () => clearInterval(interval)
      }, [])

    useEffect(() => {
      if(errorFlag){
          throw error
      }
      
      setErrorFlag(false)
      
    }, [errorFlag, error])
    return (
        <>
          {!isLoading && (     
              <CartProvider>
                <Outlet />
              </CartProvider>
          )}
        </>
    )
}

export default App
