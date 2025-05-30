import NavBar from '../../components/universal/NavBar'
import Footer from '../../components/universal/Footer'
import BrowseHeader from '../../components/browseComputers/browseHeader'

import '../../assets/styles/browseComputers/browseComputers.css'
import PromotionalBanner from '../../components/browseComputers/promotionalBanner'
import ComputerSection from '../../components/browseComputers/ComputerSection'
const ComputersPage = () => {
    return(
        <>
            <NavBar />
            <main className='background__primary'>
                <BrowseHeader />
                <PromotionalBanner />
                <ComputerSection className={"computer__section"} sectionName={"Everyday Essentials"}/>
            </main>
            <Footer />
        </>
    )
}

export default ComputersPage