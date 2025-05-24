import '../../assets/styles/home/home.css'
import HomeBody from '../../components/home/HomeBody'
import HomeComputerPlans from '../../components/home/HomeComputerPlans'
import HomeHero from '../../components/home/HomeHero'
import HomeSectionAdvance from '../../components/home/HomeSectionAdvance'
import Footer from '../../components/universal/Footer'

import NavBar from '../../components/universal/NavBar'
const HomePage = () => {
    return(
        <>
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