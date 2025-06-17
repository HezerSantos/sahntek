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
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

function App() {
  disableReactDevTools()
  const { setCsrfToken, csrfLoading, getCsrf } = useContext(CsrfContext)
  const [ isLoading, setIsLoading ] = useState(true)

  const { setErrorFlag, setError, errorFlag, error } = useContext(ErrorContext)

    if(import.meta.env.MODE === 'production'){
        useEffect(() => {
            console.error = () => {};
        }, [])
    }
    axios.defaults.withCredentials = true;
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
