import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Layout/LandingPage";
import Home from "../Home/Home";
import Login from "../LoginPage/Login";
import Loading from "../Shared/Loading";
import Add from "../AddProduct/Add";
import Products from "../Products/products";
import ProductCart from "../Products/ProductCart";
import Selected from "../SelectedProduct/Selected";
import OtherSelected from "../SelectedProduct/OtherSelected";
import Catagory from "../Catagory/Catagory";
import DashbordLayout from "../Layout/Dashboard/DashbordLayout";
import Dashbord from "../Layout/Dashboard/Dashbord";
import Register from "../LoginPage/Register";

const router = createBrowserRouter([{
    path: '/',
    element: <LandingPage></LandingPage>,
    children: [{
        path: '/',
        element: <Home></Home>,
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/loading',
        element: <Loading></Loading>
    },
    {
        path: '/add',
        element: <Add></Add>
    },
    {
        path: '/products',
        element: <Products></Products>
    },
    {
        path: '/pCart',
        element: <ProductCart></ProductCart>
    },
    {
        path: '/products/:id',
        element: <Selected></Selected>

    },
    {
        path: '/other/:catagory',
        element: <OtherSelected></OtherSelected>

    },
    {
        path: '/selected/:catagory',
        element: <Catagory></Catagory>

    },
    {
        path: '/dashboard',
        element: <DashbordLayout></DashbordLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashbord></Dashbord>
            }
        ]
    }
    ]

}]);

export default router;