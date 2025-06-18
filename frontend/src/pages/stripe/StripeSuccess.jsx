import Footer from "../../components/universal/Footer"
import NavBar from "../../components/universal/NavBar"
import '../../assets/styles/stripe/stripe.css'
import { CiCircleCheck } from "react-icons/ci";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import api from '../../../config'
import { useState } from "react";
import { useContext } from "react";
import { CsrfContext } from "../../context/CsrfContext/CsrfContext";
const StripeSuccess = () => {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ searchParams ] = useSearchParams()
    const navigate = useNavigate()
    const sessionId = searchParams.get('session_id')

    const { csrfToken, restoreCsrf } = useContext(CsrfContext)
    useEffect(() => {
        if(!sessionId){
            navigate("/")
        }

        const fetchData = async() => {
            try{
                const res = await axios.post(`${api.apiUrl}/api/stripe/checkout/sessions/verify`, {
                    sessionId: sessionId
                }, {
                    headers: {
                        csrftoken: csrfToken
                    }
                })

                if(res.status !== 200){
                    navigate("/")
                }
                setIsLoading(false)
                localStorage.clear()
            } catch(e) {
                console.error(e)
            } finally {
                restoreCsrf()
            }
        }

        fetchData()
    }, [])
    return(
        <>
            {!isLoading && (
                <>
                <NavBar />
                <main className="stripe-main">
                    <div>
                        <CiCircleCheck />
                        <h1>
                            Thank You For Shopping At Sahntek
                        </h1>
                        <p>You have been successfully charged for this transaction. A receipt for this purchase has been sent to your email.</p>
                        <button>Go Home</button>
                    </div>
                </main>
                <Footer />
                </>
            )}
        </>
    )
}

export default StripeSuccess