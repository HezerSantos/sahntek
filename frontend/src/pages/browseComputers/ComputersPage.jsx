import NavBar from '../../components/universal/NavBar'
import Footer from '../../components/universal/Footer'
import BrowseHeader from '../../components/browseComputers/browseHeader'

import '../../assets/styles/browseComputers/browseComputers.css'
import PromotionalBanner from '../../components/browseComputers/promotionalBanner'
const ComputersPage = () => {
    return(
        <>
            <NavBar />
            <main className='background__primary'>
                <BrowseHeader />
                <PromotionalBanner />
            </main>
            <Footer />
        </>
    )
}

export default ComputersPage