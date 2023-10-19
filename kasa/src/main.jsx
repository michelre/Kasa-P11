import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Logement from './pages/Logement.jsx'
import Error from './pages/404.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
    {
    path: "/logements/:id",
    element: <Logement />,
  },
    {
    path: "/about",
    element: <About />,
  },
        {
    path: "*",
    element: <Error />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)