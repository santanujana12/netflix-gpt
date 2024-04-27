import React,{ useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { setUser,removeUser } from '../../utils/Redux/userSlice';

import LoginAndSignup from '../LoginAndSignupComponent/LoginAndSignup';
import Browse from '../Browse/Browse';

// Firebase import for getting the currently signed user
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../../utils/FireBaseConfigs/FireBaseConfig" 

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
  {
    path:"/browse",
    element: <Browse/>
  }
]);

const Body = () => {

  const dispatch = useDispatch();

  // // Async function for getting the currently signed user and saving into state
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if(user){
        const { uid, accessToken , email, displayName} = user;
        dispatch(setUser({uid:uid,accessToken:accessToken,email:email,name:displayName}));
      }
    })
  },[])

  return (
    <>
      <RouterProvider router={Routes}/>
      <Toaster />
    </>
  );
}

export default Body;