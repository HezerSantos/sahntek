import App from "./App";
import HomePage from "./pages/home/HomePage";
import ComputersPage from "./pages/browseComputers/ComputersPage";
import ComputerPageById from "./pages/computerById/ComputerPageById";
import CartPage from "./pages/Cart/CartPage";
import UniversalError from "./pages/Errors/UniversalError";
import StripeSuccess from "./pages/stripe/StripeSuccess";
import StripeCancel from "./pages/stripe/StripeCancel";

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <UniversalError />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/browse-computers',
                element: <ComputersPage />
            },
            {
                path:'/browse-computers/:id',
                element: <ComputerPageById />
            },
            {
                path: "/shopping-cart",
                element: <CartPage />
            },
            {
                path: "/stripe/checkout/success/",
                element: <StripeSuccess />
            },
            {
                path: "/stripe/checkout/cancel/",
                element: <StripeCancel />
            }
        ]
    }
]

export default routes