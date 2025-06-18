import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"
import '../../assets/styles/computerById/computerById.css'
import ComputerByIdHeader from "../../components/ComputerById/ComputerByIdHeader"
import NavBar from '../../components/universal/NavBar'
import ComputerPartSection from "../../components/ComputerById/ComputerPartSection"
import Footer from '../../components/universal/Footer'
import axios from 'axios'
import api from '../../../config'
import { useContext, useEffect } from "react"
import { useState } from "react"

import CartNotification from "../../components/shoppingCart/CartNotification"
import { ErrorContext } from "../../context/ErrorContext/ErrorContext"
import { CsrfContext } from "../../context/CsrfContext/CsrfContext"
const fetchComputerById = async(
    id, 
    setCpuName, 
    setGpuName, 
    setRamName, 
    setMoboName, 
    setImageUrls, 
    setComputerName, 
    setIsLoading, 
    setCoolerName, 
    setPrice,
    setStorageOptions,
    setError,
    setErrorFlag,
    csrfToken,
    setTypeName,
    restoreCsrf,
    setPsuName
) => {
    try{
        const res = await axios.get(`${api.apiUrl}/api/computers/${id}`, {
            headers: {
                csrftoken: csrfToken
            }
        })
        const computer = res.data.computer
        setStorageOptions(computer[1])
        setComputerName(computer[0].name)
        setCpuName(computer[0].cpu.name)
        setGpuName(computer[0].gpu.name)
        setRamName(computer[0].ram.name)
        setMoboName(computer[0].motherboard.name)
        setCoolerName(computer[0].cooler.name)
        setPsuName(computer[0].psu.name)
        setImageUrls(computer[0].urls)
        setTypeName(computer[0].performance)
        const price = Object.values(computer[0]).map(computer => {
            if (computer.price){
                return computer.price
            }
        })
        
        const filteredPrice = price.filter(price => price !== null && price !== undefined)
        // console.log(filteredPrice, computer[0].casePrice)
        setPrice(filteredPrice.reduce((sum, price) => sum + price, 0) + computer[0].casePrice)
        setIsLoading(false)
    } catch(e){
        setError(e)
        setErrorFlag(true)
    } finally {
        restoreCsrf()
    }
}
const ComputerPageById = () => {
    const [ computerName, setComputerName ] = useState("")
    const [ cpuName, setCpuName ] = useState("")
    const [ gpuName, setGpuName ] = useState("")
    const [ ramName, setRamName ] = useState("")
    const [ moboName, setMoboName ] = useState("")
    const [ coolerName, setCoolerName ] = useState("")
    const [ psuName, setPsuName ] = useState("")
    const [ imageUrls, setImageUrls ] = useState("")
    const [ isLoading, setIsLoading ] = useState(true)

    const [ typeName, setTypeName ] = useState("")

    const [ currentComputer, setCurrentComputer ] = useState("")
    const [ storageOptions, setStorageOptions ] = useState("")
    const [ price, setPrice ] = useState("")

    const [ storageSelected, setStorageSelected ] = useState("")

    const [ isNotification, setIsNotification ] = useState(false)

    const { setError, setErrorFlag } = useContext(ErrorContext)
    const { csrfToken, restoreCsrf } = useContext(CsrfContext)
    useEffect(() => {
        setCurrentComputer(imageUrls[0])
    }, [imageUrls])
    const { id } = useParams()
    useEffect(() => {
        const fetchData = async() => {
            await fetchComputerById(
                id, 
                setCpuName, 
                setGpuName, 
                setRamName, 
                setMoboName, 
                setImageUrls, 
                setComputerName, 
                setIsLoading, 
                setCoolerName, 
                setPrice,
                setStorageOptions,
                setError,
                setErrorFlag,
                csrfToken,
                setTypeName,
                restoreCsrf,
                setPsuName
            )
        }
        
        fetchData()
    }, [])
    return(
        <>
            {isNotification && (
                <CartNotification imageUrl={currentComputer.url} setIsNotification={setIsNotification}/>
            )}
            <Helmet>
                <title>Computer {id} - Sahntek</title>
            </Helmet>
            <NavBar />
            <ComputerByIdHeader 
                name={computerName} 
                urls={imageUrls} 
                isLoading={isLoading} 
                currentComputer={currentComputer}
                setCurrentComputer={setCurrentComputer}
                typeName={typeName}
            />
            <main className="background__primary">

                <ComputerPartSection 
                      cpu={cpuName}
                      gpu={gpuName}
                      ram={ramName}
                      mobo={moboName}
                      cooler={coolerName}
                      price={price}
                      psu={psuName}
                      setPrice={setPrice}
                      storageOptions={storageOptions}
                      isLoading={isLoading}
                      id={id}
                      setStorageSelected={setStorageSelected}
                      storageSelected={storageSelected}
                      currentComputer={currentComputer}
                      computerName={computerName}
                      setIsNotification={setIsNotification}
                />
            </main>
            <Footer />
        </>
    )
}

export default ComputerPageById