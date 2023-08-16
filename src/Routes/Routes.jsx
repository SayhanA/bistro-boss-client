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
import Dashboard from "../Layout/DashBoard/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import DasHome from "../Pages/Dashboard/DasHome/DasHome";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";


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
                loader: ({ params }) => fetch(`https://bistro-boss-server-opal.vercel.app/menu/${params.category}`)
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
    },
    {
        path: 'dashboard',
        element: <PrivateRouters><Dashboard /></PrivateRouters>,
        children: [
            {
                path: 'userhome',
                element: <UserHome />
            },
            // admin routers
            {
                path: 'adminhome',
                element: <AdminHome />
            },
            {
                path: 'myCart',
                element: <MyCart />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem /></AdminRoute>
            },
            {
                path: 'manageitems',
                element: <AdminRoute ><ManageItems /></AdminRoute>
            }
        ]
    }
])

export default router;