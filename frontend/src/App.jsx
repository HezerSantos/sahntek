import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import axios from "axios"
import '../src/assets/styles/App.css'

function App() {
    if(import.meta.env.VITE_NODE_ENV === 'production'){
        useEffect(() => {
            console.error = () => {};
        }, [])
    }
    axios.defaults.withCredentials = true;

    // useEffect(() => {
    //     const getCsrf = async () => {
    //       try {
    //         const res = await axios.get(`${api}/api/auth/csrf`)
    //         setIsLoading(true)
    //       } catch (e) {}
    //     }
    //     getCsrf()
    //     const interval = setInterval(() => {
    //       console.log('New Csrf')
    //       getCsrf()
    //     }, 150000)
    
    //     return () => clearInterval(interval)
    //   }, [])


    return (
        <Outlet />
    )
}

export default App
