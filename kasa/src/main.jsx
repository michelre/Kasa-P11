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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
    {
    path: "/:id",
    element: <Logement />,
  },
    {
    path: "/about",
    element: <About />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
