import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './component/header.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home.jsx'
import Error from './component/error.jsx'
import Dummy from './component/Dummy.jsx'
import CountryDetail from './component/CountryDetail.jsx'
import { ThemeContext } from './contexts/ThemeContext.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:countrydetail",
        element: <CountryDetail />,
      },
      {
        path: "/about",
        element: <Dummy />,
      },
    ]
  },



]);

createRoot(document.getElementById('root')).render(
  <ThemeContext.Provider value={{ theme: "light" }}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ThemeContext.Provider>
)
