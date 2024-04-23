import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from '../LoginComponent/Login';

// Routes for New routers
const Routes = createBrowserRouter([
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/",
        element:<Login/>
    }
])

const Body = () => {
  return (
    <>
        <RouterProvider router={Routes}/>
    </>
  );
}

export default Body;