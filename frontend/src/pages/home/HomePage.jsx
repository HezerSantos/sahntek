import '../../assets/styles/home/home.css'
import HomeBody from '../../components/home/HomeBody'
import HomeHero from '../../components/home/HomeHero'

import NavBar from '../../components/universal/NavBar'
const HomePage = () => {
    return(
        <>
            <NavBar />
            <HomeHero />
            <main className='home__main'>
                <HomeBody />
            </main>
        </>
    )
}

export default HomePage