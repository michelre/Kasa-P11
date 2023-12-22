import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import About from './pages/PageAbout/About.jsx'
import Home from './pages/PageHome/Home.jsx'
import Logement from './pages/PageLogement/Logement.jsx'
import Error from './pages/Page404/404.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/logements/:id",
        element: <Logement/>,
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "*",
        element: <Error/>,
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
