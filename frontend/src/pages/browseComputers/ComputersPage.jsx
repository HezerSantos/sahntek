import NavBar from '../../components/universal/NavBar'
import Footer from '../../components/universal/Footer'
import BrowseHeader from '../../components/browseComputers/browseHeader'

import '../../assets/styles/browseComputers/browseComputers.css'
const ComputersPage = () => {
    return(
        <>
            <NavBar />
            <main className='background__primary'>
                <BrowseHeader />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default ComputersPage