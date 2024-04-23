import React from "react";

import Header from "../Header/Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-75">
        <h1 className="font-bold text-3xl py-4 text-white">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 my-4 bg-gray-700 bg-opacity-80"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 bg-gray-700 bg-opacity-80"
        />
        <button className="w-full bg-red-600 py-4 text-white my-6">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
