import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"

const ComputerPageById = () => {
    const { id } = useParams()
    
    return(
        <>
            <Helmet>
                <title>Computer {id} - Sahntek</title>
            </Helmet>
        </>
    )
}

export default ComputerPageById