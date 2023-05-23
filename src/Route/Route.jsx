import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home/Home";
import AllToys from "../Components/Pages/AllToys/AllToys";
import MyToys from "../Components/Pages/MyToys/MyToys";
import AddToys from "../Components/Pages/AddToys/AddToys";
import Blog from "../Components/Pages/Blog/Blog";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import CarDetails from "../Components/CarDetails/CarDetails";
import UpdateToyInfo from "../Components/Pages/MyToys/UpdateToyInfo";
import ViewDetails from "../Components/Pages/AllToys/ViewDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/alltoy",
                element: <AllToys></AllToys>
            },
            {
                path: "/mytoys",
                element: <MyToys></MyToys>
            },
            {
                path: "/addtoys",
                element: <AddToys></AddToys>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/cartoys/:text",
                element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://server-lyart-one.vercel.app/category/${params.text}`)
            },
            {
                path: "/update/:id",
                element: <UpdateToyInfo></UpdateToyInfo>

                
            },
            {
                path: "/alltoys/:id",
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://server-lyart-one.vercel.app/alltoys/${params.id}`)
            }

            
        ],
    },
]);

export default router;