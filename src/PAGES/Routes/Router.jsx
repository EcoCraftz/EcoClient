import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Layout/LandingPage";
import Home from "../Home/Home";
import Login from "../LoginPage/Login";
import Loading from "../Shared/Loading";
import Add from "../AddProduct/Add";
import Products from "../Products/products";
import ProductCart from "../Products/ProductCart";

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
    ]

}]);

export default router;