import App from "./App";
import HomePage from "./pages/home/HomePage";
import ComputersPage from "./pages/browseComputers/ComputersPage";
import ComputerPageById from "./pages/browseComputers/ComputerPageById";
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
            },
            {
                path:'/browse-computers/:id',
                element: <ComputerPageById />
            }
        ]
    }
]

export default routes