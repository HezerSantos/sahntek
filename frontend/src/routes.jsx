import App from "./App";
import HomePage from "./pages/home/HomePage";
import ComputersPage from "./pages/browseComputers/ComputersPage";
const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: null,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/browse-computers',
                element: <ComputersPage />
            }
        ]
    }
]

export default routes