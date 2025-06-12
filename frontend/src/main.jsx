import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import routes from './routes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CsrfProvider } from './context/CsrfContext/CsrfProvider.jsx'
import { ErrorProvider } from './context/ErrorContext/ErrorProvider.jsx'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorProvider>
      <CsrfProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </CsrfProvider>
    </ErrorProvider>
  </StrictMode>
    // <CsrfProvider>
    //   <HelmetProvider>
    //     <RouterProvider router={router} />
    //   </HelmetProvider>
    // </CsrfProvider>
)
