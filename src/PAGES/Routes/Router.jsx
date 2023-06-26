import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Layout/LandingPage";
import Home from "../Home/Home";
import Login from "../LoginPage/Login";

const router = createBrowserRouter([{
    path: '/',
    element: <LandingPage></LandingPage>,
    children: [{
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch('http://localhost:4000/get')
    },
    {
        path: '/login',
        element: <Login></Login>
    }
    ]

}]);

export default router;