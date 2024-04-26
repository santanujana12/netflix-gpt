import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginAndSignup from '../LoginAndSignupComponent/LoginAndSignup';

// Routes for New routers
const Routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginAndSignup />,
  },
  {
    path: "/",
    element: <LoginAndSignup />,
  },
]);

const Body = () => {
  return (
    <>
        <RouterProvider router={Routes}/>
    </>
  );
}

export default Body;