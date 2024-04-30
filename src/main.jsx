import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import route from './Routes/Routes.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={route}></RouterProvider>
        <Toaster />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
