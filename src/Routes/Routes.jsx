import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouters from "./PrivateRouters";
import Secret from "../Shared/Secret/Secret";
import Error from "../Pages/ErrorPage/Error";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <Order />,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.category}`)
            },
            {
                path: 'contact',
                element: <ContactUs />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'secret',
                element: <PrivateRouters><Secret /></PrivateRouters>
            }
        ]
    }
])

export default router;