import { Helmet } from 'react-helmet-async'
import '../../assets/styles/home/home.css'
import HomeBody from '../../components/home/HomeBody'
import HomeComputerPlans from '../../components/home/HomeComputerPlans'
import HomeHero from '../../components/home/HomeHero'
import HomeSectionAdvance from '../../components/home/HomeSectionAdvance'
import Footer from '../../components/universal/Footer'

import NavBar from '../../components/universal/NavBar'
import { useEffect } from 'react'
const HomePage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0});
    }, [])
    return(
        <>  <Helmet>
                <title>Home - Sahntek</title>
            </Helmet>
            <NavBar />
            <HomeHero />
            <main className='background__primary'>
                <HomeBody />
                <HomeSectionAdvance />
                <HomeComputerPlans />
            </main>
            <Footer/>
        </>
    )
}

export default HomePage