import { createBrowserRouter } from "react-router-dom";
import Business from "../Categories/Business";
import Community from "../Categories/Community";
import Policy from "../Categories/Policy";
import Shop from "../Categories/Shop";
import Sports from "../Categories/Sports";
import Tech from "../Categories/Tech";
import World from "../Categories/World";
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
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
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
            }
        ]
    }
]);

export default router;