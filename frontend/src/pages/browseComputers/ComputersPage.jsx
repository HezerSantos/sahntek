import NavBar from '../../components/universal/NavBar'
import Footer from '../../components/universal/Footer'
import BrowseHeader from '../../components/browseComputers/browseHeader'

import '../../assets/styles/browseComputers/browseComputers.css'
import PromotionalBanner from '../../components/browseComputers/promotionalBanner'
import ComputerSection from '../../components/browseComputers/ComputerSection'
import axios from 'axios'
import api from '../../../config'
import { useContext, useEffect, useState } from 'react'
import DebugConsole from '../../components/debug'
import { Helmet } from 'react-helmet-async'
import { CsrfContext } from '../../context/CsrfContext/CsrfContext'
import { ErrorContext } from '../../context/ErrorContext/ErrorContext'
const fetchAllComputers = async(
    setProComputers, 
    setAdvancedComputers, 
    setPremiumComputers, 
    setIsLoading, 
    setFeautredDeals, 
    csrfToken,
    setErrorFlag,
    setError
)=> {
    try{
        // console.time("fetch")
        
        const res = await axios.get(`${api.apiUrl}/api/computers`, {
            headers: {
                csrftoken: csrfToken
            } 
        })
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
        setError(e)
        setErrorFlag(true)
    }
}


const ComputersPage = () => {
    const [ proComputers, setProComputers ] = useState([])
    const [ advancedComputers, setAdvancedComputers ] = useState([])
    const [ premiumComputers, setPremiumComputers ] = useState([])
    const [ featuredDeals, setFeautredDeals ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    const { csrfToken, checkCookie } = useContext(CsrfContext)

    const  { setError, setErrorFlag } = useContext(ErrorContext)
    
    useEffect(() => {
        const fetchData = async() => {
            await fetchAllComputers(
                setProComputers, 
                setAdvancedComputers, 
                setPremiumComputers, 
                setIsLoading, 
                setFeautredDeals, 
                csrfToken, 
                setErrorFlag,
                setError
            )
        }
        checkCookie()
        fetchData()
        window.scrollTo({ top: 0 });
    }, [])
    
    return(
        <>
            <Helmet>
                <title>Browse Computers - Sahntek</title>
                <meta name="robots" content="index, follow"/>
                <meta name="description" content="Discover unbeatable performance and prices with our custom-built PC deals. Explore high-end, affordable builds with the latest components for gaming, productivity, and everything in between."/>
                <meta name="keywords" content="custom PCs, gaming PCs, budget PCs, computer builds, gaming deals, computer components, PC deals, gaming setup, affordable computers, high-performance PCs"/>

                <meta property="og:type" content="website" />
                <meta property="og:title" content="SAHNTEK - Featured PC Deals" />
                <meta property="og:description" content="Unlock incredible performance at unbeatable prices with our featured PC deals. Explore custom-built PCs for gaming and productivity, starting at just $500!" />
                <meta property="og:image" content="https://sahntek.hallowedvisions.com/PC12/MUSETEX%20ATX%20PC%20Case%20Y%20Black%20PC12.webp" />
                <meta property="og:url" content="https://www.sahntek.com" />

            </Helmet>
            <NavBar />
            <BrowseHeader featuredDeals={featuredDeals} isLoading={isLoading}/>
            <main className='background__primary'>
                
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