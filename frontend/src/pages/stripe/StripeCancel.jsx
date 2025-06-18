import '../../assets/styles/stripe/stripe.css'
import Footer from "../../components/universal/Footer"
import NavBar from "../../components/universal/NavBar"
import { ImCancelCircle } from "react-icons/im";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import api from '../../../config'
import { useState } from 'react';
import { useContext } from 'react';
import { CsrfContext } from '../../context/CsrfContext/CsrfContext';
const StripeCancel = () => {
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
                            <ImCancelCircle />
                            <h1>
                                Your Stripe Session Has Been Canceled
                            </h1>
                            <button onClick={() => navigate("/browse-computers")}>Continue Shopping</button>
                        </div>
                    </main>
                    <Footer />
                </>
            )}
        </>
    )
}

export default StripeCancel