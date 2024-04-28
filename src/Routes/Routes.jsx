import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import MyList from "../pages/MyList/MyList";
import ProtectedRoute from "./ProtectedRoute";
import Details from "../pages/Details/Details";
import UpdatePage from "../pages/UpdatePage/UpdatePage";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/tourists-spot'),
            },
            {
                path: '/all-tourists-spot',
                element: <AllTouristsSpot></AllTouristsSpot>,
                loader: () => fetch('http://localhost:5000/tourists-spot'),
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
            },
            {
                path: '/tourists-spot/:id',
                element: <ProtectedRoute><Details></Details></ProtectedRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/tourists-spot/${params.id}`)
            },
            {
                path:'/update/:id',
                element:<UpdatePage></UpdatePage>,
                loader: ({ params }) => fetch(`http://localhost:5000/tourists-spot/${params.id}`),
            },
            
        ]
    }
])

export default route;