import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"
import '../../assets/styles/computerById/computerById.css'
import ComputerByIdHeader from "../../components/ComputerById/ComputerByIdHeader"
import NavBar from '../../components/universal/NavBar'
const ComputerPageById = () => {
    const { id } = useParams()
    
    return(
        <>
            <Helmet>
                <title>Computer {id} - Sahntek</title>
            </Helmet>
            <NavBar />
            <ComputerByIdHeader />
        </>
    )
}

export default ComputerPageById