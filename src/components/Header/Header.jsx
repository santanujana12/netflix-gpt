import React, { useEffect } from "react";
import NetFlixLogo from "../../utils/Logos/Netflix_Logo_PMS.png";
import NetflixUser from "../../utils/Logos/NetflixUser.png";

import { auth } from "../../utils/FireBaseConfigs/FireBaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { removeUser, setUser } from "../../utils/Redux/userSlice";
import { toggleGptView } from "../../utils/Redux/gptSlice";

// Change language
import { langCodes } from "../../utils/LANGUAGE_CONSTANTS/languageConstant";
import { changeLanguage } from "../../utils/Redux/languageSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const toggleGPTview = useSelector((store) => store.gptSlice.toggleGpt);

  // // Async function for getting the currently signed user and saving into state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, accessToken, email, displayName } = user;
        dispatch(
          setUser({
            uid: uid,
            accessToken: accessToken,
            email: email,
            name: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe as soon as the components unmounts
    return () => unsubscribe();
  }, []);

  // Handle Sign Out function
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out Successful");
        dispatch(removeUser());
        toast.success("Signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <div className="flex flex-col md:flex-row justify-between">
        <img className="w-32 mx-auto md:w-52 md:m-0" src={NetFlixLogo} alt="LogoImage" />
        {user && (
          <div className="flex gap-8 md:gap-4">
            {/* Because of the implementation of the languahe change features only in GPT window, hence the conditional rendering */}
            <div>
              {toggleGPTview && (
                <select
                  className="p-2 m-4 md:p-3 md:m-4 rounded-lg bg-gray-500 text-white"
                  onChange={(e) => dispatch(changeLanguage(e.target.value))}
                >
                  {Object.entries(langCodes).map(([key, lang]) => {
                    return <option key={key}>{lang}</option>;
                  })}
                </select>
              )}
              <button
                className="bg-blue-600 text-white px-2 py-2 md:px-4 md:py-3 rounded-lg my-4"
                onClick={() => dispatch(toggleGptView())}
              >
                {toggleGPTview ? "Homepage" : "GPT Search"}
              </button>
            </div>
            <div>
              <img className="w-12 md:w-16" src={NetflixUser} alt="UserLogo" />
              <p
                className="cursor-pointer font-bold text-white"
                onClick={() => handleSignOut()}
              >
                Sign Out
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
