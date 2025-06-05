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
const fetchComputerById = async(id, setCpuName, setGpuName, setRamName, setMoboName, setComputerName) => {
    try{
        const res = await axios.get(`${api.apiUrl}/api/computers/${id}`)
        const computer = res.data.computer
        setComputerName(computer.name)
        setCpuName(computer.cpu.name)
        setGpuName(computer.gpu.name)
        setRamName(computer.ram.name)
        setMoboName(computer.motherboard.name)

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

    const { id } = useParams()
    useEffect(() => {
        const fetchData = async() => {
            await fetchComputerById(id, setCpuName, setGpuName, setRamName, setMoboName, setComputerName)
        }

        // fetchData()
    })
    return(
        <>
            <Helmet>
                <title>Computer {id} - Sahntek</title>
            </Helmet>
            <NavBar />
            <ComputerByIdHeader name={computerName}/>
            <main className="background__primary">
                <ComputerPartSection 
                      cpu={cpuName}
                      gpu={gpuName}
                      ram={ramName}
                      mobo={moboName}
                />
            </main>
            <Footer />
        </>
    )
}

export default ComputerPageById