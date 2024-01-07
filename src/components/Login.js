import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // Validate the Form Data
    // console.log(password.current.value);
    // console.log(email.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // Sign In / Sing Up
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute w-full">
        <img
          className="w-full hidden md:block"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-11/12 md:w-3/12 absolute p-12 mx-auto my-36 right-0 left-0  bg-[rgba(0,0,0,.75)] bg-opacity-100 rounded-xl text-white"
      >
        <h1 className="text-3xl text-white font-medium p-4">
          {isSignInForm ? "Sign In " : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-lg bg-[#333]"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-lg bg-[#333]"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2  w-full rounded-lg bg-[#333]"
        />
        <p className="text-red-500 text-lg ">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-[#e50914] hover:bg-red-400 text-white  w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In " : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already User? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
