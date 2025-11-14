import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layouts/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import Orders from './Components/Orders/Orders.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index:true,
        Component: Home
      },
      {
        path: 'Login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
      
  </StrictMode>,
)
