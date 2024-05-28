import React, { useState, useRef } from "react";
// Firebase setup
import { auth } from "../../utils/FireBaseConfigs/FireBaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../utils/Redux/userSlice";

import Header from "../Header/Header";
import { ValidateData } from "../../utils/Validators/ValidateData";

// Local constant imports
import { HOME_PICTURE_URL } from "../../utils/CONSTANTS/constants";

const LoginAndSignup = () => {
  // Toggling between sign in and sign up
  const [signUpPage, setSignUpPage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Using ref instead of state to prevent re-rendering
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // Handling Sign up mechanisms
  const handleSignup = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;

    const validateData = ValidateData(email, password);

    if (validateData !== "") {
      setErrorMessage(validateData);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name,
          })
            .then(() => {
              const { uid, accessToken, email, displayName } = auth.currentUser;
              dispatch(
                setUser({
                  uid: uid,
                  accessToken: accessToken,
                  email: email,
                  name: displayName,
                })
              );
              // console.log(auth);
            })
            .catch((error) => {
              setErrorMessage(error.message);
              toast.error(error.message);
            });
        })
        .catch((error) => {
          toast.error(error.message);
          console.log(error.message);
        });
    }
  };

  // Handling Sign in mechanisms
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const validateData = ValidateData(email, password);

    if (validateData !== "") {
      setErrorMessage(validateData);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("Thank you!");
        })
        .catch((error) => {
          toast.error(error.message);
          console.log(error.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img src={HOME_PICTURE_URL} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-75"
      >
        <h1 className="font-bold text-3xl py-4 text-white">
          {signUpPage ? "Sign Up" : "Sign In"}
        </h1>
        {signUpPage && (
          <input
            type="text"
            ref={nameRef}
            placeholder="Full Name"
            className="w-full p-4 my-4 bg-gray-700 bg-opacity-80 text-white"
            required
          />
        )}
        <input
          type="email"
          ref={emailRef}
          placeholder="Email"
          className="w-full p-4 my-4 bg-gray-700 bg-opacity-80 text-white"
          required
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          className="w-full p-4 my-4 bg-gray-700 bg-opacity-80 text-white"
          required
        />

        {errorMessage && <p className="text-red-600">{errorMessage}</p>}

        <button
          className="w-full bg-red-600 py-4 text-white my-6"
          onClick={signUpPage ? (e) => handleSignup(e) : (e) => handleSignIn(e)}
        >
          {signUpPage ? "Sign Up" : "Sign In"}
        </button>

        {signUpPage ? (
          <p className="text-white" onClick={() => setSignUpPage(!signUpPage)}>
            Already Have an account?{" "}
            <span className="underline cursor-pointer">Sign in here.</span>
          </p>
        ) : (
          <p className="text-white" onClick={() => setSignUpPage(!signUpPage)}>
            New to Netflix?{" "}
            <span className="underline cursor-pointer">Sign up now.</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginAndSignup;
