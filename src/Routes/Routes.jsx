import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import MyList from "../pages/MyList/MyList";
import ProtectedRoute from "./ProtectedRoute";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/all-tourists-spot',
                element: <AllTouristsSpot></AllTouristsSpot>
            },
            {
                path: '/add-tourists-spot',
                element: <ProtectedRoute><AddTouristsSpot></AddTouristsSpot></ProtectedRoute>
            },
            {
                path: '/my-list',
                element: <ProtectedRoute><MyList></MyList></ProtectedRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default route;