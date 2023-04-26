import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Business from "../Categories/Business";
import Community from "../Categories/Community";
import Policy from "../Categories/Policy";
import Resources from "../Categories/Resources";
import Shop from "../Categories/Shop";
import Sports from "../Categories/Sports";
import Tech from "../Categories/Tech";
import World from "../Categories/World";
import LoginLayout from "../Layout/LoginLayout";
import Root from "../Layout/Root";
import Category from "../Pages/Category";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news ')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: 'world',
                element: <World></World>
            },
            {
                path: 'tech',
                element: <Tech></Tech>
            },
            {
                path: 'sports',
                element: <Sports></Sports>
            },
            {
                path: 'shop',
                element: <Shop></Shop>
            },
            {
                path: 'business',
                element: <Business></Business>
            },
            {
                path: 'community',
                element: <Community></Community>
            },
            {
                path: 'policy',
                element: <Policy></Policy>
            },
            {
                path: 'resources',
                element: <Resources></Resources>
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;