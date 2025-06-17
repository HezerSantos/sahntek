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
  const { setCsrfToken, csrfLoading, getCsrf } = useContext(CsrfContext)
  const [ isLoading, setIsLoading ] = useState(true)

  const { setErrorFlag, setError, errorFlag, error } = useContext(ErrorContext)

    // if(import.meta.env.VITE_NODE_ENV === 'production'){
    //     useEffect(() => {
    //         console.error = () => {};
    //     }, [])
    // }
    axios.defaults.withCredentials = true;
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = null
    useEffect(() => {
        getCsrf()
      }, [])

    useEffect(() => {
      if(errorFlag){
          throw error
      }
      
      setErrorFlag(false)
      
    }, [errorFlag, error])
    return (
        <>
          {!csrfLoading && (     
              <CartProvider>
                <Outlet />
              </CartProvider>
          )}
        </>
    )
}

export default App
