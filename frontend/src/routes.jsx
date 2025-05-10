import App from "./App";
import HomePage from "./pages/home/HomePage";
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
        ]
    }
]

export default routes