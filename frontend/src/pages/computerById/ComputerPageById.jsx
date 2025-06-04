import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"
import '../../assets/styles/computerById/computerById.css'
import ComputerByIdHeader from "../../components/ComputerById/ComputerByIdHeader"
import NavBar from '../../components/universal/NavBar'
import ComputerPartSection from "../../components/ComputerById/ComputerPartSection"
import Footer from '../../components/universal/Footer'
const ComputerPageById = () => {
    const { id } = useParams()
    
    return(
        <>
            <Helmet>
                <title>Computer {id} - Sahntek</title>
            </Helmet>
            <NavBar />
            <ComputerByIdHeader />
            <main className="background__primary">
                <ComputerPartSection />
            </main>
            <Footer />
        </>
    )
}

export default ComputerPageById