import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Cart from './Components/Cart/Cart.jsx';
import Wishlist from './Components/Wishlist/Wishlist.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/category/:name',
        element:<Home></Home>,
       },
      {
        path:'product/:product_id',
        element:<ProductDetails></ProductDetails>,
        loader: () => fetch('/productData.json')
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:'dashboard/cart',
            element:<Cart></Cart>,
            loader: () => fetch('/productData.json')
          },
          {
            path:'dashboard/wishlist',
            element:<Wishlist></Wishlist>,
            loader: () => fetch('/productData.json')
          }
        ]
      },
    
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
  </StrictMode>,
)
