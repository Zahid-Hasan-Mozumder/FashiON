import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navigation from './componenets/Navigation'
import Slider from './componenets/Slider'
import Products from './componenets/Products'
import Footer from './componenets/Footer'
import NotFound from './componenets/NotFound'
import SingleProduct from './componenets/SingleProduct'
import CategorizedProduct from './componenets/CategorizedProduct'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
      {
          path: "/",
          element: <Home />
      },
      {
          path: "/products",
          element: <><Navigation /><Products /><Footer /></>
      },
      {
          path: "/item/:id",
          element: <><Navigation /><SingleProduct /><Footer /></>
      },
      {
          path: "/products/:category",
          element: <><Navigation/><CategorizedProduct/><Footer/></>
      },
      {
          path: "*",
          element: <NotFound />
      },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
