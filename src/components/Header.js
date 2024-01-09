import React, { useEffect } from "react";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import GptSearch from "./GptSearch";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when the component unmounts

    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleGptSearchClick = () => {
    // Toggle GPT Search button
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    // <div className="absolute px-8 py-4 bg-gradient-to-b from-black z-10">
    <div className="absolute w-screen px-8 py-6 z-10 bg-gradient-to-b from-black flex justify-between ">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 m-2 text-white bg-purple-400 rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home " :" GPT Search"}
        
          </button>

          <p className="m-2 text-white text-3xl">Hi ,{user.displayName}</p>
          <img
            className="w-12 mx-2 rounded-3xl "
            src={user.photoURL}
            alt="usericon"
          />
          <button
            className=" p-2 text-white rounded-lg"
            onClick={handleSignOut}
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
