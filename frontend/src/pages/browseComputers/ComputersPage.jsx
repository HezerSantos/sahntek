import NavBar from '../../components/universal/NavBar'
import Footer from '../../components/universal/Footer'
import BrowseHeader from '../../components/browseComputers/browseHeader'

import '../../assets/styles/browseComputers/browseComputers.css'
import PromotionalBanner from '../../components/browseComputers/promotionalBanner'
import ComputerSection from '../../components/browseComputers/ComputerSection'
import axios from 'axios'
import api from '../../../config'
import { useEffect, useState } from 'react'
import DebugConsole from '../../components/debug'
import { Helmet } from 'react-helmet-async'
const fetchAllComputers = async(setProComputers, setAdvancedComputers, setPremiumComputers, setIsLoading, setFeautredDeals)=> {
    try{
        // console.time("fetch")
        const res = await axios.get(`${api.apiUrl}/api/computers`)
        // console.log(res)
        // console.timeEnd("fetch")
        const randomComputerOne = res.data.pro[Math.floor(Math.random() * res.data.pro.length)] 
        const randomComputerTwo = res.data.advanced[Math.floor(Math.random() * res.data.advanced.length)] 
        const randomComputerThree = res.data.premium[Math.floor(Math.random() * res.data.premium.length)] 
        setFeautredDeals([randomComputerOne, randomComputerTwo, randomComputerThree])
        setProComputers(res.data.pro)
        setAdvancedComputers(res.data.advanced)
        setPremiumComputers(res.data.premium)
        setIsLoading(false)
    }catch(e){
        console.error(e)
    }
}
const ComputersPage = () => {
    const [ proComputers, setProComputers ] = useState([])
    const [ advancedComputers, setAdvancedComputers ] = useState([])
    const [ premiumComputers, setPremiumComputers ] = useState([])
    const [ featuredDeals, setFeautredDeals ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        console.log(featuredDeals)
    }, [featuredDeals])
    useEffect(() => {
        const fetchData = async() => {
            await fetchAllComputers(setProComputers, setAdvancedComputers, setPremiumComputers, setIsLoading, setFeautredDeals)
        }
        fetchData()
    }, [])

    return(
        <>
            <Helmet>
                <title>Browse Computers - Sahntek</title>

            </Helmet>
            <NavBar />
            <main className='background__primary'>
                <BrowseHeader featuredDeals={featuredDeals} isLoading={isLoading}/>
                <PromotionalBanner />
                <ComputerSection 
                    className={"computer__section"} 
                    sectionName={"Everyday Essentials"} 
                    isLoading={isLoading}
                    computerContent={proComputers}
                    type={'Pro'}
                    price={'500'}
                />
                <ComputerSection 
                    className={"computer__section"} 
                    sectionName={"Performance Powerhouse"} 
                    isLoading={isLoading}
                    computerContent={advancedComputers}
                    type={'Advanced'}
                    price={'1000'}
                />
                <ComputerSection 
                    className={"computer__section"} 
                    sectionName={"Ultimate Experience"} 
                    isLoading={isLoading}
                    computerContent={premiumComputers}
                    type={'Premium'}
                    price={'2000'}
                />
            </main>
            <Footer />
        </>
    )
}

export default ComputersPage