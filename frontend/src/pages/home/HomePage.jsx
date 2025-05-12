import '../../assets/styles/home/home.css'
import HomeBody from '../../components/home/HomeBody'
import HomeHero from '../../components/home/HomeHero'
import HomeSectionAdvance from '../../components/home/HomeSectionAdvance'

import NavBar from '../../components/universal/NavBar'
const HomePage = () => {
    return(
        <>
            <NavBar />
            <HomeHero />
            <main className='background__primary'>
                <HomeBody />
                <HomeSectionAdvance />
            </main>
        </>
    )
}

export default HomePage