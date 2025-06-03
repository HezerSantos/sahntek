import NavBar from '../../components/universal/NavBar'
import Footer from '../../components/universal/Footer'
import BrowseHeader from '../../components/browseComputers/browseHeader'

import '../../assets/styles/browseComputers/browseComputers.css'
import PromotionalBanner from '../../components/browseComputers/promotionalBanner'
import ComputerSection from '../../components/browseComputers/ComputerSection'
import axios from 'axios'
import api from '../../../config'
import { useEffect, useState } from 'react'
const fetchAllComputers = async(setProComputers, setAdvancedComputers, setPremiumComputers)=> {
    try{
        console.time("fetch")
        const res = await axios.get(`${api.apiUrl}/api/computers`)
        console.timeEnd("fetch")
        setProComputers(res.data.pro)
        setAdvancedComputers(res.data.advanced)
        setPremiumComputers(res.data.premium)
    }catch(e){
        console.error(e)
    }
}
const ComputersPage = () => {
    const [ proComputers, setProComputers ] = useState([])
    const [ advancedComputers, setAdvancedComputers ] = useState([])
    const [ premiumComputers, setPremiumComputers ] = useState([])


    useEffect(() => {
        const fetchData = async() => {
            await fetchAllComputers(setProComputers, setAdvancedComputers, setPremiumComputers)
        }
        // fetchData()
    }, [])
    return(
        <>
            <NavBar />
            <main className='background__primary'>
                <BrowseHeader />
                <PromotionalBanner />
                <ComputerSection className={"computer__section"} sectionName={"Everyday Essentials"}/>
                <ComputerSection className={"computer__section"} sectionName={"Performance Powerhouse"}/>
                <ComputerSection className={"computer__section"} sectionName={"Ultimate Experience"}/>
            </main>
            <Footer />
        </>
    )
}

export default ComputersPage