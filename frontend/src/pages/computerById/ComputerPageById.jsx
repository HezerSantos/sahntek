import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"
import '../../assets/styles/computerById/computerById.css'
import ComputerByIdHeader from "../../components/ComputerById/ComputerByIdHeader"
import NavBar from '../../components/universal/NavBar'
import ComputerPartSection from "../../components/ComputerById/ComputerPartSection"
import Footer from '../../components/universal/Footer'
import axios from 'axios'
import api from '../../../config'
import { useEffect } from "react"
import { useState } from "react"
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
    setStorageOptions
) => {
    try{
        const res = await axios.get(`${api.apiUrl}/api/computers/${id}`)
        const computer = res.data.computer
        // console.log(computer)
        setStorageOptions(computer[1])
        setComputerName(computer[0].name)
        setCpuName(computer[0].cpu.name)
        setGpuName(computer[0].gpu.name)
        setRamName(computer[0].ram.name)
        setMoboName(computer[0].motherboard.name)
        setCoolerName(computer[0].cooler.name)
        setImageUrls(computer[0].urls)

        const price = Object.values(computer[0]).map(computer => {
            if (computer.price){
                return computer.price
            }
        })

        const filteredPrice = price.filter(price => price !== null && price !== undefined)

        setPrice(filteredPrice.reduce((sum, price) => sum + price, 0) + computer[0].casePrice)
        setIsLoading(false)
    } catch(e){
        console.error(e)
    }
}
const ComputerPageById = () => {
    const [ computerName, setComputerName ] = useState("")
    const [ cpuName, setCpuName ] = useState("")
    const [ gpuName, setGpuName ] = useState("")
    const [ ramName, setRamName ] = useState("")
    const [ moboName, setMoboName ] = useState("")
    const [ coolerName, setCoolerName ] = useState("")
    const [ imageUrls, setImageUrls ] = useState("")
    const [ isLoading, setIsLoading ] = useState(true)

    const [ currentComputer, setCurrentComputer ] = useState("")
    const [ storageOptions, setStorageOptions ] = useState("")
    const [ price, setPrice ] = useState("")
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
                setStorageOptions
            )
        }

        fetchData()
    }, [])
    return(
        <>
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
            />
            <main className="background__primary">
                <ComputerPartSection 
                      cpu={cpuName}
                      gpu={gpuName}
                      ram={ramName}
                      mobo={moboName}
                      cooler={coolerName}
                      price={price}
                      setPrice={setPrice}
                      storageOptions={storageOptions}
                      isLoading={isLoading}
                />
            </main>
            <Footer />
        </>
    )
}

export default ComputerPageById