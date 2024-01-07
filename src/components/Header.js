import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    // <div className="absolute px-8 py-4 bg-gradient-to-b from-black z-10">
    <div className="absolute w-screen px-8 py-6 z-10 bg-gradient-to-b from-black flex justify-between ">
      <img
        className="w-44"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="logo"
      />

      {user && (
        <div className="flex p-2">
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
