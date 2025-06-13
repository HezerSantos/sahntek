import { useContext, useEffect, useState } from "react"
import { useNavigate, useRouteError } from "react-router-dom"
import { ErrorContext } from "../../context/ErrorContext/ErrorContext"
import { MdOutlineErrorOutline } from "react-icons/md";
import NavBar from "../../components/universal/NavBar";
import { FaRegCompass } from "react-icons/fa6";
import Footer from "../../components/universal/Footer";
import { Helmet } from "react-helmet-async";
const UniversalError = () => {
  const error = useRouteError()
  const navigate = useNavigate()
  const errorMap = new Map([
    [401, 'Unauthorized'],
    [403, 'Forbidden'],
    [404, 'Page Not Found'],
    [429, 'Too Many Requests'],
    [500, 'Internal Server Error']
  ])
  return (
    <>
      <Helmet>
        <title>{`${error.status || 500} - ${errorMap.get(error.status || 500)}`}</title>
         <meta name="robots" content="noindex" />
         {error.staus === 404? (
          <meta name="description" content="This page does not exist. Return home to find what you're looking for." />
         ) : (
          <meta name="description" content="Something went wrong on our end. Please try again later or return to the homepage." />
         )}
      </Helmet>
      <NavBar hide={true}/>
      <main className="error-main">
        {error.status === 404? (
          <>
            <FaRegCompass />
            <h1>404</h1>
            <p>Opps! This Page Doesnt Exist</p>
            <button onClick={() => navigate("/")}>Go Home</button>
          </>
        ) : (
          <>
            <MdOutlineErrorOutline />
            <h1>{error.status || 500} {errorMap.get(error.status)}</h1>
            <p>Opps! Something Went Wrong</p>
            <button onClick={() => navigate("/")}>Go Home</button>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};


export default UniversalError