import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import axios from "axios"
import './index.css'
import api from '../config'
function App() {
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
            
          } catch (e) { console.error(e)}
        }
        getCsrf()
        const interval = setInterval(() => {
          console.log('New Csrf')
          getCsrf()
        }, 150000)
    
        return () => clearInterval(interval)
      }, [])


    return (
        <Outlet />
    )
}

export default App
