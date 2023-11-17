import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ClientCategoryFood, ClientHome } from './Pages/Client';
import PageNotFound from './Pages/PageNotFound';
import CartProvider from './Context/CartContext';
import { Toaster } from 'react-hot-toast';
import {ClientLayout, ClientAllCategories} from './Pages/Client';


const router = createBrowserRouter([
  {
    path: 'dash2023/restaurant',
    element: <ClientLayout />,
    children: [
      { path: '', element: <ClientHome /> },
      { path: 'categorias', element: <ClientAllCategories /> },
      { path: 'categoria/:id/:nombre', element: <ClientCategoryFood /> },
    ]
  },
  { path: '*', element: <PageNotFound /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <Toaster />
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
