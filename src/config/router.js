import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
} from "react-router-dom"

import Signin from '../views/Signin'
import Signup from '../views/Signup'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Signin/>,
            },
            {
                path: "/signup",
                element: <Signup />,
            }
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    const navigate = useNavigate()

    return (
        <div>

            <Outlet />


        </div>)
}

export default Router