import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Layout/Home';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import cartProductsLoader from './Loaders/cartProductsLoader';
import Checkout from './Components/Checkout/Checkout';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider, { AuthContext } from './Components/Providers/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';

const AppRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home></Home>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          element: <Orders></Orders>,
          // loader: () => fetch('products.json'),
          // Usage of custom loader created by me
          loader: cartProductsLoader
        },
        {
          path: '/checkout',
          element: <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        },
        {
          path: '/inventory',
          element: <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <SignUp></SignUp>
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router = {AppRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
